/**
 * Paste this into Extensions > Apps Script on your Google Sheet
 * (https://docs.google.com/spreadsheets/d/1-QbosuhbXRj9yghxWZwCI2L9WISkuSPB1MiZASQbiWo/edit),
 * then deploy it as a Web App. See README.md in this folder for the exact
 * steps. Once deployed, put the resulting /exec URL into this project's
 * .env (and Netlify's env vars) as VITE_SHEETS_WEBAPP_URL.
 *
 * Writes one row per "Join Our Dance Crew" form submission, adding a header
 * row automatically the first time it runs.
 */

// Matches the header row already on the "MMX Enquiry" sheet: Student Name,
// Age*, Gender*, Parent/Guardian Name*, WhatsApp Number*, Email,
// Area / Location*, Status, How did you hear about us? — no timestamp
// column, and "Status" is left blank for staff to fill in manually
// (e.g. New / Contacted / Enrolled) once they follow up.
const SHEET_ID = '1-QbosuhbXRj9yghxWZwCI2L9WISkuSPB1MiZASQbiWo'

const HEADERS = [
  'Student Name',
  'Age*',
  'Gender*',
  'Parent/Guardian Name*',
  'WhatsApp Number*',
  'Email',
  'Area / Location*',
  'Status',
  'How did you hear about us?',
]

function doPost(e) {
  // SpreadsheetApp.getActiveSpreadsheet() returns null when this script runs
  // as a Web App hit from an external POST (there's no "active" spreadsheet
  // in that execution context) — it only works when the Sheet itself is open
  // in a browser. Open by ID instead so this works for real form submissions.
  const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet()

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS)
  }

  const data = JSON.parse(e.postData.contents)

  sheet.appendRow([
    data.student_name || '',
    data.age || '',
    data.gender || '',
    data.parent_guardian_name || '',
    data.whatsapp_number || '',
    data.email || '',
    data.area_location || '',
    '', // Status — left blank for staff to fill in
    data.how_did_you_hear_about_us || '',
  ])

  return ContentService.createTextOutput(JSON.stringify({ status: 'success' })).setMimeType(
    ContentService.MimeType.JSON,
  )
}
