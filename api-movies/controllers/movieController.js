import movieService from "../services/movieService.js";
import { ObjectId } from "mongodb";

const getAllMovies = async (req, res) => {
  try {
    const movies = await movieService.getAll();
    res.status(200).json({ movies });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal error in server" });
  }
};

const createMovie = async (req, res) => {
  try {
    const { title, year, duration, ageRating, synopsis, genre, descriptions } = req.body;
    await movieService.Create(title, year, duration, ageRating, synopsis, genre, descriptions);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal error in server" });
  }
};

const deleteMovie = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      await movieService.Delete(id);
      res.sendStatus(204);
    } else {
      res.status(400).json({ error: "The ID sent is invalid." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal error in server" });
  }
};

const updateMovie = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const { title, year, duration, ageRating, synopsis, genre, descriptions } = req.body;
      const movie = await movieService.Update(id, title, year, duration, ageRating, synopsis, genre, descriptions);
      res.status(200).json({ movie });
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal error in server" });
  }
};

const getOneMovie = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const movie = await movieService.getOne(id);
      if (!movie) {
        res.status(404).json({ error: "Movie not found." });
      } else {
        res.status(200).json({ movie });
      }
    } else {
      res.status(400).json({ error: "Invalid ID." });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export default { getAllMovies, createMovie, deleteMovie, updateMovie, getOneMovie };
