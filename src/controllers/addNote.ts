import { Request, Response, NextFunction } from "express";
import Notes from "../repositories/index";

const addNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const note = await Notes.addNote(req.body);
    return res
      .status(201)
      .json({ status: "success", code: 201, data: { note } });
  } catch (e) {
    next(e);
  }
};

export default addNote;
