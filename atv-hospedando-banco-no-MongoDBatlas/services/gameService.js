import Game from "../models/Games.js";
 
class gameService {
  async getAll() {
    try {
      const games = await Game.find();
      return games;
    } catch (error) {
      console.log(error);
    }
  }
  async Create(title, year, price, descriptions) {
    try {
      const newGame = new Game({
        title,
        year,
        price,
        descriptions
      });
      await newGame.save();
    } catch (error) {
      console.log(error);
    }
  }
 
  async Delete(id) {
    try {
      await Game.findByIdAndDelete(id);
      console.log(`Game with id: ${id} was deleted with success.`);
    } catch (error) {
      console.log(error);
    }
  }
 
  async Update(id, title, year, price, descriptions) {
    try {
      const game = await Game.findByIdAndUpdate(
        id, 
        {
        title,
        year,
        price,
        descriptions
      },
      { new: true}
    );
      console.log(`Data games with id: ${id} updated with success.`);
    } catch (error) {
      console.log(error);
    }
  }
 
  async getOne(id) {
    try {
      const game = await Game.findOne({ _id: id });
      return game;
    } catch (error) {
      console.log(error);
    }
  }
}
 
export default new gameService();