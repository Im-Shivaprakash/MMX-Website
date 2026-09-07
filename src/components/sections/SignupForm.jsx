import { useState } from 'react'
import { signup } from '../../data/content.js'
import { renderRichText } from '../../utils/richText.jsx'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import styles from './SignupForm.module.css'

const emptyValues = Object.fromEntries(signup.fields.map((f) => [f.id, '']))

const FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID
if (!FORM_ID && import.meta.env.DEV) {
  // eslint-disable-next-line no-console
  console.warn(
    'VITE_FORMSPREE_FORM_ID is not set — copy .env.example to .env and add your Formspree form ID, otherwise the signup form will not be able to submit.',
  )
}

export default function SignupForm() {
  const [values, setValues] = useState(emptyValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  function handleChange(id, value) {
    setValues((v) => ({ ...v, [id]: value }))
  }

  function validate() {
    const nextErrors = {}
    for (const field of signup.fields) {
      if (!values[field.id].trim()) {
        nextErrors[field.id] = 'Required'
      }
    }
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  function resetForm() {
    setValues(emptyValues)
    setErrors({})
    setStatus('idle')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          Object.fromEntries(signup.fields.map((f) => [f.name, values[f.id]])),
        ),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="signup" className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.headerRow}>
          <h2 className={styles.heading}>{renderRichText(signup.heading)}</h2>
          <span className={styles.script}>{signup.script}</span>
        </div>
        <p className={styles.subtext}>{signup.subtext}</p>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>{signup.formTitle}</h3>

          {status === 'success' ? (
            <div className={styles.successState}>
              <p>{signup.successMessage}</p>
              <button type="button" className={styles.resetLink} onClick={resetForm}>
                {signup.resetLabel}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {status === 'error' && <p className={styles.errorBanner}>{signup.errorMessage}</p>}

              <div className={styles.grid}>
                {signup.fields.map((field) => (
                  <label key={field.id} className={styles.field}>
                    <span className={styles.fieldLabel}>{field.label}</span>
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      value={values[field.id]}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      aria-invalid={Boolean(errors[field.id])}
                      className={errors[field.id] ? styles.inputError : undefined}
                    />
                    {errors[field.id] && <span className={styles.fieldError}>{errors[field.id]}</span>}
                  </label>
                ))}
              </div>

              <Button
                type="submit"
                variant="solid-gold"
                disabled={status === 'submitting'}
                className={styles.submit}
              >
                {status === 'submitting' ? signup.submittingLabel : signup.submitLabel}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  )
}
