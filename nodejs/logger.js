const { createLogger, format, transports } = require("winston");
const winston = require("winston/lib/winston/config");
const { combine, timestamp, label, printf } = format;
require("winston-syslog").Syslog;

let sysOptions = {};
const Logger = () => {
  const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
  });

  return createLogger({
    level: "debug",
    // format: winston.format.simple(),
    format: combine(
      format.colorize(),
      label({ label: "right meow!" }),
      timestamp({ format: "HH:mm:ss" }),
      myFormat
    ),

    //defaultMeta: { service: 'user-service' },
    transports: [
      new transports.Console(),
      new transports.File({
        filename: "Application.log",
      }),
      new transports.Syslog({
        app_name: "IDAP",
        host: "",
        port: 1000,
        protocol: "udp4",
        facility: "sec",
        srcport: 1020,
      }),
    ],
  });
};

module.exports = Logger;
