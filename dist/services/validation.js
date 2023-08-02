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
exports.validationUpdateNote = exports.validationCreateNote = void 0;
const joi_1 = __importDefault(require('joi'));
const schemaCreateNote = joi_1.default.object({
  noteName: joi_1.default.string().required(),
  category: joi_1.default
    .string()
    .pattern(/Task|Random Thought|Idea/)
    .required(),
  content: joi_1.default.string().required(),
});
const schemaUpdateNote = joi_1.default
  .object({
    noteName: joi_1.default.string().optional(),
    category: joi_1.default
      .string()
      .pattern(/Task|Random Thought|Idea/)
      .optional(),
    content: joi_1.default.string().optional(),
  })
  .or('noteName', 'category', 'content');
const validate = (schema, obj, next, message) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      yield schema.validateAsync(obj);
      next();
    } catch (err) {
      next({ status: 400, message });
    }
  });
const validationCreateNote = (req, res, next, message = 'missing required name field') => {
  return validate(schemaCreateNote, req.body, next, message);
};
exports.validationCreateNote = validationCreateNote;
const validationUpdateNote = (req, res, next, message = 'missing fields') => {
  return validate(schemaUpdateNote, req.body, next, message);
};
exports.validationUpdateNote = validationUpdateNote;
