import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const schemaCreateNote = Joi.object({
  noteName: Joi.string().required(),
  category: Joi.string()
    .pattern(/Task|Random Thought|Idea/)
    .required(),
  content: Joi.string().required(),
});

const schemaUpdateNote = Joi.object({
  noteName: Joi.string().optional(),
  category: Joi.string()
    .pattern(/Task|Random Thought|Idea/)
    .optional(),
  content: Joi.string().optional(),
}).or("noteName", "category", "content");

const validate = async (
  schema: typeof schemaCreateNote | typeof schemaUpdateNote,
  obj: {},
  next: NextFunction,
  message: string
) => {
  try {
    await schema.validateAsync(obj);
    next();
  } catch (err) {
    next({ status: 400, message });
  }
};

const validationCreateNote = (
  req: Request,
  res: Response,
  next: NextFunction,
  message: string = "missing required name field"
) => {
  return validate(schemaCreateNote, req.body, next, message);
};
const validationUpdateNote = (
  req: Request,
  res: Response,
  next: NextFunction,
  message: string = "missing fields"
) => {
  return validate(schemaUpdateNote, req.body, next, message);
};

export { validationCreateNote, validationUpdateNote };
