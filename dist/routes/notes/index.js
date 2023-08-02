'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const router = express_1.default.Router();
const index_1 = __importDefault(require('../../controllers/index'));
const validation_1 = require('../../services/validation');
router.get('/stats', index_1.default.getNotesSummary);
router.get('/', index_1.default.getAllNotes);
router.get('/archive', index_1.default.getAllArchiveNotes);
router.get('/:id', index_1.default.getNoteById);
router.post('/', validation_1.validationCreateNote, index_1.default.addNote);
router.patch('/:id', validation_1.validationUpdateNote, index_1.default.updateNote);
router.patch('/archive/:id', index_1.default.archiveNote);
router.patch('/unarchive/:id', index_1.default.unarchiveNote);
router.delete('/:id', index_1.default.removeNote);
router.delete('/archive/:id', index_1.default.removeArchiveNote);
exports.default = router;
