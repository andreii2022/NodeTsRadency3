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
const getDate_1 = __importDefault(require('../helpers/getDate'));
const dateValidation_1 = __importDefault(require('../services/dateValidation'));
const updateNote = (noteId, body) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield (0, getAllNotes_1.default)();
    const [updatableNote] = notes.filter((note) => note.id === noteId);
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
      const createDate = (0, getDate_1.default)();
      const validatedDate = (0, dateValidation_1.default)(contentOfNote);
      Object.assign(updatableNote, {
        id: noteId,
        noteName: nameOfNote,
        created: createDate,
        category: categoryOfNote,
        content: contentOfNote,
        dates: validatedDate,
      });
      yield promises_1.default.writeFile(
        path_1.default.join(__dirname, '../json/notes.json'),
        JSON.stringify(notes),
      );
    }
    return updatableNote;
  });
exports.default = updateNote;
