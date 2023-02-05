const express = require("express");
require("express-async-errors");

// extra security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

const notFound = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
const api = require("./routes/api");

const app = express();

app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

app.use("/api/v1/", api);

app.use(notFound);
app.use(errorMiddleware);

module.exports = app;
