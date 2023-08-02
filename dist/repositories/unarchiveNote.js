'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const promises_1 = __importDefault(require('fs/promises'));
const path_1 = __importDefault(require('path'));
const getAllNotes_1 = __importDefault(require('./getAllNotes'));
const getAllArchiveNotes_1 = __importDefault(require('./getAllArchiveNotes'));
const unarchiveNote = (noteId) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield (0, getAllNotes_1.default)();
    const archiveNotes = yield (0, getAllArchiveNotes_1.default)();
    const [noteById] = archiveNotes.filter((note) => note.id === noteId);
    const index = archiveNotes.findIndex((note) => note.id === noteId);
    if (index !== -1) {
      archiveNotes.splice(index, 1);
      yield promises_1.default.writeFile(
        path_1.default.join(__dirname, '../json/archiveNotes.json'),
        JSON.stringify(archiveNotes),
      );
      notes.push(noteById);
      yield promises_1.default.writeFile(
        path_1.default.join(__dirname, '../json/notes.json'),
        JSON.stringify(notes),
      );
    }
    return noteById;
  });
exports.default = unarchiveNote;
