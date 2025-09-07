import mongoose from "mongoose";

const descriptionSchema = new mongoose.Schema({
  cast: [{ name: String, role: String }],
  director: { name: String, nationality: String },
  languages: [{ language: String, subtitlesAvailable: Boolean }],
  origin: String,
});

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  duration: Number,
  ageRating: Number,
  synopsis: String,
  genre: [String],
  descriptions: descriptionSchema,
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
