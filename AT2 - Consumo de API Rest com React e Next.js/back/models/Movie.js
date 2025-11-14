import mongoose from "mongoose";

const descriptionSchema = new mongoose.Schema({
  genre: String,
  director: String,
  rating: Number,
  duration: Number
});

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  descriptions: descriptionSchema,
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;