// notesService.ts

import { Note } from './types'; // Предполагается, что у вас определен интерфейс Note в файле types.ts

const notes: Note[] = [
  {
    id: 1,
    name: 'Note 1',
    created: '2023-07-30',
    category: 'Category 1',
    content: 'Content for Note 1',
    dates: ['2023-08-01'],
    isActive: true,
  },
  // Дополнительные заметки...
];

// Функция для создания новой заметки
export const createNote = (newNote: Note): Note => {
  const id = notes.length + 1;
  const noteWithId = { ...newNote, id };
  notes.push(noteWithId);
  return noteWithId;
};

// Функция для удаления заметки по ID
export const deleteNote = (id: number): void => {
  const index = notes.findIndex((note) => note.id === id);
  if (index !== -1) {
    notes.splice(index, 1);
  }
};

// Функция для редактирования заметки по ID
export const updateNote = (id: number, updatedNote: Partial<Note>): Note | null => {
  const index = notes.findIndex((note) => note.id === id);
  if (index !== -1) {
    const updated = { ...notes[index], ...updatedNote };
    notes[index] = updated;
    return updated;
  }
  return null;
};

// Функция для получения заметки по ID
export const getNote = (id: number): Note | null => {
  return notes.find((note) => note.id === id) || null;
};

// Функция для получения всех заметок
export const getAllNotes = (): Note[] => {
  return notes;
};

// Функция для получения агрегированных статистических данных
export const getStats = (): { activeCount: number; archivedCount: number } => {
  const activeCount = notes.filter((note) => note.isActive).length;
  const archivedCount = notes.filter((note) => !note.isActive).length;
  return { activeCount, archivedCount };
};
