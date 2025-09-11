import Movie from "../models/Movies.js";

class movieService {
  async getAll() {
    try {
      return await Movie.find();
    } catch (error) {
      console.log(error);
    }
  }

  async Create(title, year, duration, ageRating, synopsis, genre, descriptions) {
    try {
      const newMovie = new Movie({ title, year, duration, ageRating, synopsis, genre, descriptions });
      await newMovie.save();
    } catch (error) {
      console.log(error);
    }
  }

  async Delete(id) {
    try {
      await Movie.findByIdAndDelete(id);
      console.log(`Movie with id: ${id} deleted successfully.`);
    } catch (error) {
      console.log(error);
    }
  }

  async Update(id, title, year, duration, ageRating, synopsis, genre, descriptions) {
    try {
      return await Movie.findByIdAndUpdate(
        id,
        { title, year, duration, ageRating, synopsis, genre, descriptions },
        { new: true }
      );
    } catch (error) {
      console.log(error);
    }
  }

  async getOne(id) {
    try {
      return await Movie.findById(id);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new movieService();
