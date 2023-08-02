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
const getAllNotes_1 = __importDefault(require('./getAllNotes'));
const getAllArchiveNotes_1 = __importDefault(require('./getAllArchiveNotes'));
const noteSummary_1 = __importDefault(require('../services/noteSummary'));
const getNoteSummary = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield (0, getAllNotes_1.default)();
    const archiveNotes = yield (0, getAllArchiveNotes_1.default)();
    const summary = (0, noteSummary_1.default)(notes, archiveNotes);
    return summary;
  });
exports.default = getNoteSummary;
