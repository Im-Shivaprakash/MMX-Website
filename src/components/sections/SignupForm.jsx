import { useState } from 'react'
import { signup } from '../../data/content.js'
import { renderRichText } from '../../utils/richText.jsx'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import styles from './SignupForm.module.css'

const emptyValues = Object.fromEntries(signup.fields.map((f) => [f.id, '']))
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const SHEET_WEBAPP_URL = import.meta.env.VITE_SHEETS_WEBAPP_URL
if (!SHEET_WEBAPP_URL && import.meta.env.DEV) {
  // eslint-disable-next-line no-console
  console.warn(
    'VITE_SHEETS_WEBAPP_URL is not set — copy .env.example to .env and add your deployed Google Apps Script Web App URL, otherwise the signup form will not be able to submit.',
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
      const value = values[field.id].trim()
      if (field.required && !value) {
        nextErrors[field.id] = 'Required'
      } else if (field.type === 'email' && value && !EMAIL_PATTERN.test(value)) {
        nextErrors[field.id] = 'Enter a valid email'
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
      // Google Apps Script Web Apps don't send CORS headers on the response,
      // so a normal fetch() would throw even on a successful write — the
      // request still reaches the script and appends the row either way.
      // mode: 'no-cors' avoids that (at the cost of not being able to read
      // the response), so success here just means the request went out
      // without a network error, not a confirmed server-side write.
      await fetch(SHEET_WEBAPP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(
          Object.fromEntries(signup.fields.map((f) => [f.name, values[f.id]])),
        ),
      })
      setStatus('success')
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
                    {field.type === 'select' ? (
                      <select
                        value={values[field.id]}
                        onChange={(e) => handleChange(field.id, e.target.value)}
                        aria-invalid={Boolean(errors[field.id])}
                        className={errors[field.id] ? styles.inputError : undefined}
                      >
                        <option value="" disabled>
                          {field.placeholder}
                        </option>
                        {field.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={values[field.id]}
                        onChange={(e) => handleChange(field.id, e.target.value)}
                        aria-invalid={Boolean(errors[field.id])}
                        className={errors[field.id] ? styles.inputError : undefined}
                      />
                    )}
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
