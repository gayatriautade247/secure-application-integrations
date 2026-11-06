# Test Report

## Scope
Automated API tests cover internship retrieval, successful application submission, server-side validation, SQL-injection resistance through parameterized queries, and security headers.

## Test cases

| ID | Test | Expected result |
|---|---|---|
| T01 | GET `/api/internships` | HTTP 200 and seeded role data |
| T02 | POST valid application | HTTP 201 and application reference |
| T03 | POST invalid values | HTTP 400 with field-level errors |
| T04 | Submit SQL-like text in name | Text is stored literally; tables remain intact |
| T05 | Inspect response headers | Helmet security headers are present |

## Run the tests
1. Install dependencies with `npm install`.
2. Run `npm test`.
3. Confirm all five tests pass.

## Result recording
The tests are included and ready to run in the target Node.js environment. Record the actual terminal output and date here after running `npm test`; do not mark tests as passed before execution.
