import http from "http";
import app from "./app";
import { port } from "./config/secrets";
import connectDB from "./config/db";

const PORT = port;

const server = http.createServer(app);

async function main() {
  await connectDB();

  server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
}

main().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
