import express from 'express';
import cors from 'cors';
import { connectToDB } from './database/mongoose';

const app = express();
app.use(cors());
connectToDB();

app.get('/', (req, res) => {
  res.json({ message: 'Hello User' });
});

app.listen(3001);
