import { Request, Response, NextFunction } from "express";
import Notes from "../repositories/index";

const getNotesSummary = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const summary = await Notes.getNotesSummary();
    return res.json({ status: "success", code: 200, data: { summary } });
  } catch (e) {
    next(e);
  }
};

export default getNotesSummary;
