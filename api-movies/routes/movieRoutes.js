import express from "express";
const movieRoutes = express.Router();
import movieController from "../controllers/movieController.js";

movieRoutes.get("/movies", movieController.getAllMovies);

movieRoutes.post("/movies", movieController.createMovie);

movieRoutes.delete("/movies/:id", movieController.deleteMovie);

movieRoutes.put("/movies/:id", movieController.updateMovie);

movieRoutes.get("/movies/:id", movieController.getOneMovie);

export default movieRoutes;
