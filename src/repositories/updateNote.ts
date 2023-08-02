type notesType = {
  id: string;
  noteName: string;
  created: string;
  category: string;
  content: string;
  dates: string;
};

import fs from "fs/promises";
import path from "path";
import getAllNotes from "./getAllNotes";
import getDate from "../helpers/getDate";
import dateValidation from "../services/dateValidation";

const updateNote = async (
  noteId: string,
  body: {
    noteName?: string;
    category?: string;
    content?: string;
  }
) => {
  const notes = await getAllNotes();
  const [updatableNote] = notes.filter((note: notesType) => note.id === noteId);

  if (updatableNote) {
    let nameOfNote = body.noteName;
    let categoryOfNote = body.category;
    let contentOfNote = body.content;

    if (!body.noteName) {
      nameOfNote = updatableNote.noteName;
    }
    if (!body.category) {
      categoryOfNote = updatableNote.category;
    }
    if (!body.content) {
      contentOfNote = updatableNote.content;
    }
    const createDate: string = getDate();
    const validatedDate: string = dateValidation(contentOfNote);
    Object.assign(updatableNote, {
      id: noteId,
      noteName: nameOfNote,
      created: createDate,
      category: categoryOfNote,
      content: contentOfNote,
      dates: validatedDate,
    });
    await fs.writeFile(
      path.join(__dirname, "../json/notes.json"),
      JSON.stringify(notes)
    );
  }
  return updatableNote;
};

export default updateNote;
