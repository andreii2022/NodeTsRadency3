import { Request, Response, NextFunction } from "express";
import Notes from "../repositories/index";

const archiveNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const note = await Notes.archiveNote(req.params.id);
    if (note) {
      return res
        .status(201)
        .json({ status: "success", code: 200, data: { note } });
    }
    return res.json({ status: "error", code: 404, message: "Not found" });
  } catch (e) {
    next(e);
  }
};

export default archiveNote;
