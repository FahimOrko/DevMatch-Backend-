import pino from "pino";

const log = pino({
  base: {
    pid: false,
  },
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: "yyyy-mm-dd HH:MM:ss",
      ignore: "hostname",
    },
  },
});

export default log;
