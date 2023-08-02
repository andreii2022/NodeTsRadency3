import getAllNotes from "./getAllNotes";
import getAllArchiveNotes from "./getAllArchiveNotes";
import noteSummary from "../services/noteSummary";

const getNoteSummary = async () => {
  const notes = await getAllNotes();
  const archiveNotes = await getAllArchiveNotes();
  const summary = noteSummary(notes, archiveNotes);

  return summary;
};

export default getNoteSummary;
