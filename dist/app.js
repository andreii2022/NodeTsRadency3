'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const cors_1 = __importDefault(require('cors'));
const index_1 = __importDefault(require('./routes/notes/index'));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/notes', index_1.default);
app.use((req, res) => {
  res.status(404).json({ status: 'error', code: 404, message: 'Not found' });
});
app.use((err, req, res) => {
  const status = err.status || 500;
  res.status(status).json({ status: 'fail', code: status, message: err.message });
});
exports.default = app;
