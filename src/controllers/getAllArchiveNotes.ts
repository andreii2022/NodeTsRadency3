import { Request, Response, NextFunction } from "express";
import Notes from "../repositories/index";

const getAllArchiveNotes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const notes = await Notes.getAllArchiveNotes();
    return res.json({ status: "success", code: 200, data: { notes } });
  } catch (e) {
    next(e);
  }
};

export default getAllArchiveNotes;
