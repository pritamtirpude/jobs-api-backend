const express = require("express");

const authenticationMiddleware = require("../middleware/authentication");

const authRouter = require("./auth");
const jobsRouter = require("./jobs");

const api = express.Router();

api.use("/auth", authRouter);
api.use("/jobs", authenticationMiddleware, jobsRouter);

module.exports = api;
