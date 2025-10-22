import http from "http";
import app from "./app";
import { port } from "./config/secrets";
import connectDB from "./config/db";
import log from "./config/logger";

const PORT = port;

const server = http.createServer(app);

async function main() {
  await connectDB();

  server.listen(PORT, () => {
    log.info(`Server listening on http://localhost:${PORT}`);
  });
}

main().catch((error) => {
  log.error("Failed to start server:", error);
  process.exit(1);
});
