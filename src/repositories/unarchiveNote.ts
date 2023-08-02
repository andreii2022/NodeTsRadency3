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
import getAllArchiveNotes from "./getAllArchiveNotes";

const unarchiveNote = async (noteId: string) => {
  const notes = await getAllNotes();
  const archiveNotes = await getAllArchiveNotes();

  const [noteById] = archiveNotes.filter(
    (note: notesType) => note.id === noteId
  );
  const index = archiveNotes.findIndex((note: notesType) => note.id === noteId);

  if (index !== -1) {
    archiveNotes.splice(index, 1);
    await fs.writeFile(
      path.join(__dirname, "../json/archiveNotes.json"),
      JSON.stringify(archiveNotes)
    );

    notes.push(noteById);
    await fs.writeFile(
      path.join(__dirname, "../json/notes.json"),
      JSON.stringify(notes)
    );
  }

  return noteById;
};

export default unarchiveNote;
