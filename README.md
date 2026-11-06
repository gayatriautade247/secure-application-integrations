# CodeBridge — Secure Application Integration

A beginner-friendly internship portal demonstrating frontend/API integration, loading and failure states, retry behavior, client- and server-side validation, rate limiting, security headers, parameterized SQL queries, and automated tests.

## Features
- Loads internship roles from `GET /api/internships`.
- Shows a loading message, API failure message, and retry button.
- Submits applications to `POST /api/applications`.
- Validates fields in the browser and independently on the server.
- Uses SQLite prepared statements (parameterized queries).
- Uses Helmet security headers and API rate limiting.
- Includes automated API/security tests and a test report.

## Requirements
- Node.js 20 or newer
- npm

## Run locally
```bash
npm install
npm start
```
Open **http://localhost:3000** in your browser.

## Run tests
```bash
npm test
```
The tests use an in-memory SQLite database, so they do not alter your local application database.

## Project structure
```text
secure-application-integration/
├── public/
│   ├── app.js
│   ├── index.html
│   └── styles.css
├── src/
│   ├── database.js
│   ├── routes.js
│   └── validation.js
├── test/
│   └── api.test.js
├── .env.example
├── .gitignore
├── package.json
├── server.js
├── SECURITY_CHECKLIST.md
├── TEST_REPORT.md
└── README.md
```

## API
### `GET /api/internships`
Returns `{ "data": [...] }` containing available roles.

### `POST /api/applications`
Example JSON:
```json
{
  "fullName": "Aditi Sharma",
  "email": "aditi@example.com",
  "phone": "+91 98765 43210",
  "internshipId": 1,
  "coverNote": "I am interested in this internship and have built small web projects."
}
```
Success: HTTP `201` with an application reference. Invalid input: HTTP `400` with field-level validation details.

## Security implementation
- `helmet` adds security response headers and a same-origin Content Security Policy.
- `express-rate-limit` limits API traffic.
- Express JSON parsing is limited to 20 KB.
- Server-side validation checks lengths, email, phone, and selected role.
- SQLite queries use placeholders/bound parameters.
- Frontend role content is rendered using `textContent`.

## Before submitting your internship task
1. Run `npm install`.
2. Run `npm test` and update `TEST_REPORT.md` with the actual result.
3. Run `npm start` and verify the site at `http://localhost:3000`.
4. Push this folder to a public GitHub repository.
5. Submit the public repository URL as your single proof link.

## Important
This is a demonstration project. Do not use it to collect real applicant personal data without adding a privacy notice, consent, authentication/authorization for administrative access, monitoring, backups, and a data-retention policy.
