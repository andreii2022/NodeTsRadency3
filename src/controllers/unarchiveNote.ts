import { Request, Response, NextFunction } from "express";
import Notes from "../repositories/index";

const unarchiveNote = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const note = await Notes.unarchiveNote(req.params.id);

    if (note) {
      return res
        .status(200)
        .json({ status: "success", code: 201, data: { note } });
    }
    return res.json({ status: "error", code: 404, message: "Not found" });
  } catch (e) {
    next(e);
  }
};

export default unarchiveNote;
