import express from "express";
import cors from "cors";
import mongoose from "mongoose"; 
import movieRoutes from "./routes/movieRoutes.js";
import connectToDatabase from "./config/db-connection.js"; 

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/movies', movieRoutes);

app.get('/', (req, res) => {
  res.json({ message: '🎬 API de Filmes - Backend funcionando!' });
});

connectToDatabase();

const port = 3001;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`🚀 API rodando em http://localhost:${port}`);
});