# Security Checklist

- [x] HTTPS-ready deployment: deploy behind a hosting provider that enforces HTTPS.
- [x] Security headers: Helmet enables protections including content-type sniffing and clickjacking defenses.
- [x] Content Security Policy: scripts, styles, and API connections are restricted to the same origin.
- [x] Request size limit: JSON bodies are limited to 20 KB.
- [x] Rate limiting: API requests are limited to 100 per 15 minutes per client IP (default configuration).
- [x] Server-side validation: every submitted field is validated on the server; browser validation is only a usability layer.
- [x] Parameterized SQL: all user-provided values are bound parameters, not concatenated into SQL.
- [x] Safe rendering: API text is inserted with `textContent`, not `innerHTML`.
- [x] Generic error responses: unexpected server errors do not expose stack traces to clients.
- [ ] Production database backup and retention policy configured.
- [ ] Production secrets and database path configured through hosting environment variables.
- [ ] Deploy behind HTTPS and verify rate limits using the production proxy configuration.

## Notes
This is a learning/demo project, not a complete production hiring platform. Add authentication, privacy notice/consent, monitoring, spam controls, and a documented data-retention policy before collecting real applicant information.
