import express from "express";
import mongoose from "mongoose"; 
const app = express();
import Game from "./models/Games.js"; 
import gameRoutes from "./routes/gameRoutes.js";
import connectToDatabase from "./config/db-connection.js"; 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', gameRoutes);

connectToDatabase();

const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`API rodando em http://localhost:${port}`);
});