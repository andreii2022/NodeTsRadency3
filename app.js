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
