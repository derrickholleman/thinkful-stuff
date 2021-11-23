// initializes pino logger
const pinoHttp = require("pino-http");
// generate a new ID for each log
const { nanoid } = require("nanoid");

// npm install pino-pretty - formats JSON response from the logger

const level = process.env.LOG_LEVEL || "info";
const nodeEnv = process.env.NODE_ENV || "development";
const prettyPrint = nodeEnv === "development";

const logger = pinoHttp({
  genReqId: (request) => request.headers["x-request-id"] || nanoid(),
  level,
  prettyPrint,
});

module.exports = logger;
