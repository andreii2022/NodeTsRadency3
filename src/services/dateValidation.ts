import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import notesRouter from "./routes/notes/index";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/notes", notesRouter);

app.use((req, res) => {
  res.status(404).json({ status: "error", code: 404, message: "Not found" });
});

app.use(
  (err: { status: number; message: any }, req: Request, res: Response) => {
    const status = err.status || 500;
    res
      .status(status)
      .json({ status: "fail", code: status, message: err.message });
  }
);

export default app;
