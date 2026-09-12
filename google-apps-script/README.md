# Signup form → Google Sheet

The "Join Our Dance Crew" form on the site posts submissions to a Google
Apps Script "Web App" bound to your Sheet, which appends each one as a new
row. Set this up once:

1. Open your Sheet: https://docs.google.com/spreadsheets/d/1-QbosuhbXRj9yghxWZwCI2L9WISkuSPB1MiZASQbiWo/edit
2. **Extensions → Apps Script**. Delete anything in the default `Code.gs`
   editor and paste in the contents of `Code.gs` from this folder.
3. Click **Deploy → New deployment**.
4. Click the gear icon next to "Select type" and choose **Web app**.
5. Fill in:
   - **Execute as**: Me (your Google account)
   - **Who has access**: Anyone
   (this does *not* expose your Sheet's contents publicly — it only lets
   anyone *submit* to this one endpoint; nobody can read the Sheet through
   it, and the Sheet itself keeps its normal sharing settings.)
6. Click **Deploy**, then **Authorize access** and approve the permissions
   prompt (it's your own script acting on your own Sheet).
7. Copy the **Web app URL** it gives you — it ends in `/exec`.
8. Put that URL into:
   - Local dev: copy `.env.example` → `.env` in the project root, set
     `VITE_SHEETS_WEBAPP_URL=<the url>`.
   - Netlify: Site settings → Environment variables → add
     `VITE_SHEETS_WEBAPP_URL` with the same value, then redeploy.

**Updating the script later**: if you ever edit `Code.gs`, you need to
**Deploy → Manage deployments → edit (pencil icon) → New version → Deploy**
for the change to take effect — saving the file alone doesn't update the
live Web App.

**Note on reliability**: Apps Script Web Apps don't send CORS headers back
to the browser, so the site can't actually read a success/failure response
from it — it just assumes success once the request goes out without a
network error. If you want to confirm it's working, submit the form once
and check the Sheet for a new row.

**If the site shows "Thanks!" but no row appears**: that success message
does *not* mean the write succeeded — it only means the request left the
browser. To see the real error:

1. In the Apps Script editor, click the clock icon (**Executions**) in the
   left sidebar.
2. Find the most recent `doPost` execution and open it — it shows the
   actual error (permission issue, wrong sheet name, bad payload, etc.)
   instead of the silence the browser sees.
3. Double-check the tab name in the Sheet is exactly `MMX Enquiry`
   (case-sensitive) — the script now creates that tab if it's missing, but
   if your data is landing on a *different* tab, this is usually why.
4. Remember every edit to `Code.gs` needs a **new deployment version**
   (see above) — pasting the change into the editor alone does not update
   the live `/exec` URL.
