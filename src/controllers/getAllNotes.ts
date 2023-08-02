import { Request, Response, NextFunction } from "express";
import Notes from "../repositories/index";

const getAllNotes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const notes = await Notes.getAllNotes();
    return res.json({ status: "success", code: 200, data: { notes } });
  } catch (e) {
    next(e);
  }
};

export default getAllNotes;
