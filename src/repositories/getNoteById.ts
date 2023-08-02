type notesType = {
  id: string;
  noteName: string;
  created: string;
  category: string;
  content: string;
  dates: string;
};

import getAllNotes from "./getAllNotes";

const getNoteById = async (noteId: string) => {
  const notes = await getAllNotes();
  const [noteById] = notes.filter((note: notesType) => note.id === noteId);
  return noteById;
};

export default getNoteById;
