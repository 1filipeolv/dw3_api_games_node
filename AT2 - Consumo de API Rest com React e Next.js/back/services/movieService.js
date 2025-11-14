import Movie from "../models/Movie.js";

class movieService {
  async getAll() {
    try {
      const movies = await Movie.find();
      return movies;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async Create(title, year, descriptions) {
    try {
      const newMovie = new Movie({
        title,
        year,
        descriptions
      });
      await newMovie.save();
      return newMovie;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async Delete(id) {
    try {
      await Movie.findByIdAndDelete(id);
      console.log(`Movie with id: ${id} was deleted with success.`);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async Update(id, title, year, descriptions) {
    try {
      const movie = await Movie.findByIdAndUpdate(
        id,
        {
          title,
          year,
          descriptions
        },
        { new: true }
      );
      console.log(`Data movie with id: ${id} updated with success.`);
      return movie;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getOne(id) {
    try {
      const movie = await Movie.findOne({ _id: id });
      return movie;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default new movieService();