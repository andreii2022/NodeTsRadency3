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

const removeNote = async (noteId: string) => {
  const notes = await getAllNotes();
  const index = notes.findIndex((note: notesType) => note.id === noteId);
  if (index !== -1) {
    const removedNote = notes.splice(index, 1);
    await fs.writeFile(
      path.join(__dirname, "../json/notes.json"),
      JSON.stringify(notes)
    );
    return removedNote;
  }
  return null;
};
export default removeNote;
