const express = require('express');
const bodyParser = require('body-parser');
const { Note } = require('./models'); // Шлях до вашої моделі

const app = express();
app.use(bodyParser.json());

// Оголошення маршруту для отримання всіх нотаток
app.get('/notes', async (req, res) => {
  try {
    const notes = await Note.findAll();
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Помилка сервера' });
  }
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`);
});

app.post('/notes', async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = await Note.create({ title, content });
    res.status(201).json(newNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Помилка сервера' });
  }
});
app.put('/notes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedNote = await Note.update({ title, content }, { where: { id } });
    res.json(updatedNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Помилка сервера' });
  }
});
app.delete('/notes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Note.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Помилка сервера' });
  }
});
