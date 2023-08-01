// src/index.ts
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;


app.use(cors());
app.use(bodyParser.json());


let notes: Note[] = [
 
];


interface Note {
  id: number;
  name: string;
  created: string;
  category: number;
  content: string;
  dates: string[];
  isActive: boolean;
}


app.get('/notes', (req, res) => {
  res.json(notes);
});




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
