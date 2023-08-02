type notesType = {
  id: string;
  noteName: string;
  created: string;
  category: string;
  content: string;
  dates: string;
}[];

const noteSummary = (notes: notesType, archiveNotes: notesType) => {
  let countOfIdeas = 0;
  let countOfTasks = 0;
  let countOfThoughts = 0;
  let countOfArchiveIdeas = 0;
  let countOfArchiveTasks = 0;
  let countOfArchiveThoughts = 0;

  try {
    notes.forEach((el) => {
      if (el.category === "Idea") {
        countOfIdeas += 1;
      }
      if (el.category === "Task") {
        countOfTasks += 1;
      }
      if (el.category === "Random Thought") {
        countOfThoughts += 1;
      }
    });
  } catch (error) {
  
    console.log(error);
  }

  try {
    archiveNotes.forEach((el) => {
      if (el.category === "Idea") {
        countOfArchiveIdeas += 1;
      }
      if (el.category === "Task") {
        countOfArchiveTasks += 1;
      }
      if (el.category === "Random Thought") {
        countOfArchiveThoughts += 1;
      }
    });
  } catch (error) {
   
    console.log(error);
  }

  return [
    { category: "Idea", active: countOfIdeas, archive: countOfArchiveIdeas },
    { category: "Task", active: countOfTasks, archive: countOfArchiveTasks },
    {
      category: "Random Thought",
      active: countOfThoughts,
      archive: countOfArchiveThoughts,
    },
  ];
};

export default noteSummary;
