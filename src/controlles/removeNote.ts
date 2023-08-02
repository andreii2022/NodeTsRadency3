import { Request, Response, NextFunction } from "express";
import Notes from "../repositories/index";

const removeNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const note = await Notes.removeNote(req.params.id);
    if (note) {
      return res.json({
        status: "success",
        message: "note deleted",
        code: 204,
      });
    }
    return res.json({ status: "error", code: 404, message: "Not found" });
  } catch (e) {
    next(e);
  }
};

export default removeNote;
