import fs from "fs/promises";
import path from "path";
import { v4 } from "uuid";
import getAllNotes from "./getAllNotes";
import getDate from "../helpers/getDate";
import dateValidation from "../services/dateValidation";

const addNote = async (body: {
  noteName: string;
  category: string;
  content: string;
}) => {
  const notes = await getAllNotes();
  const id = v4();
  const createDate: string = getDate();
  const validatedDate: string = dateValidation(body.content);
  const newNote = {
    id,
    noteName: body.noteName,
    created: createDate,
    category: body.category,
    content: body.content,
    dates: validatedDate,
  };
  notes.push(newNote);
  await fs.writeFile(
    path.join(__dirname, "../json/notes.json"),
    JSON.stringify(notes)
  );
  return newNote;
};

export default addNote;
