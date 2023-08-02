'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const addNote_1 = __importDefault(require('./addNote'));
const archiveNote_1 = __importDefault(require('./archiveNote'));
const getAllArchiveNotes_1 = __importDefault(require('./getAllArchiveNotes'));
const getAllNotes_1 = __importDefault(require('./getAllNotes'));
const getNoteById_1 = __importDefault(require('./getNoteById'));
const getNotesSummary_1 = __importDefault(require('./getNotesSummary'));
const removeArchiveNote_1 = __importDefault(require('./removeArchiveNote'));
const removeNote_1 = __importDefault(require('./removeNote'));
const unarchiveNote_1 = __importDefault(require('./unarchiveNote'));
const updateNote_1 = __importDefault(require('./updateNote'));
exports.default = {
  addNote: addNote_1.default,
  archiveNote: archiveNote_1.default,
  getAllArchiveNotes: getAllArchiveNotes_1.default,
  getAllNotes: getAllNotes_1.default,
  getNoteById: getNoteById_1.default,
  getNotesSummary: getNotesSummary_1.default,
  removeArchiveNote: removeArchiveNote_1.default,
  removeNote: removeNote_1.default,
  unarchiveNote: unarchiveNote_1.default,
  updateNote: updateNote_1.default,
};
