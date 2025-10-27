import pino from "pino";
import { environment } from "./secrets";

const isProd = environment === "production";

const log = pino({
  level: isProd ? "info" : "debug",
  base: null,
  transport: !isProd
    ? {
        target: "pino-pretty",
        options: {
          colorize: true,
          translateTime: "yyyy-mm-dd HH:MM:ss",
        },
      }
    : undefined,
});

export default log;
