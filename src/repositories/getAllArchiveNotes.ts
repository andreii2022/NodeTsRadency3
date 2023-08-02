import fs from "fs/promises";
import path from "path";

const getAllArchiveNotes = async () => {
  const data = await fs.readFile(
    path.join(__dirname, "../json/archiveNotes.json"),
    "utf8"
  );
  return JSON.parse(data);
};

export default getAllArchiveNotes;
