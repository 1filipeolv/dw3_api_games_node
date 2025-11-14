import express from "express";
import movieController from "../controllers/movieController.js";

const movieRoutes = express.Router();

movieRoutes.get("/", movieController.getAllMovies);
movieRoutes.get("/:id", movieController.getOneMovie);
movieRoutes.post("/", movieController.createMovie);
movieRoutes.put("/:id", movieController.updateMovie);
movieRoutes.delete("/:id", movieController.deleteMovie);

export default movieRoutes;