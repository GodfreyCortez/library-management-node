import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { DatabaseManager } from "./libraries";
import bookRouter from "./routes/books/entry-points/book";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

DatabaseManager.testConnection();

app.use(express.json());

app.use("/book", bookRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
