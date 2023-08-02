import { Request, Response, NextFunction } from "express";
import Notes from "../repositories/index";

const removeArchiveNote = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const note = await Notes.removeArchiveNote(req.params.id);
    if (note) {
      return res.json({
        status: "success",
        message: "note deleted",
        code: 204,
        data: note,
      });
    }
    return res.json({ status: "error", code: 404, message: "Not found" });
  } catch (e) {
    next(e);
  }
};

export default removeArchiveNote;
