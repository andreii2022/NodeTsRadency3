import fs from "fs/promises";
import path from "path";

const getAllNotes = async () => {
  const data = await fs.readFile(
    path.join(__dirname, "../json/notes.json"),
    "utf8"
  );
  return JSON.parse(data);
};

export default getAllNotes;
