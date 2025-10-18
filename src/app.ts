import express, { Request, Response } from "express";

const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests

app.get("/", (req: Request, res: Response) => {
  res.send("Hello TypeScript + Express!");
});

export default app;
