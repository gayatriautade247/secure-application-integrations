import express from "express";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createDatabase } from "./src/database.js";
import { createApiRouter } from "./src/routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function createApp({ db = createDatabase() } = {}) {
  const app = express();

  // Security headers (CSP is configured for this same-origin vanilla frontend).
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'"],
        imgSrc: ["'self'", "data:"],
        connectSrc: ["'self'"],
        objectSrc: ["'none'"],
        upgradeInsecureRequests: null
      }
    }
  }));

  app.use(express.json({ limit: "20kb" }));
  app.use(express.static(path.join(__dirname, "public")));

  const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-7",
    legacyHeaders: false,
    message: { error: "Too many requests. Please try again later." }
  });
  app.use("/api", apiLimiter);
  app.use("/api", createApiRouter(db));

  // Consistent JSON error responses; never expose internal exception details.
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  });

  return app;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const port = Number(process.env.PORT || 3000);
  const app = createApp();
  app.listen(port, () => console.log(`CodeBridge is running at http://localhost:${port}`));
}
