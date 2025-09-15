import gameService from "../services/gameService.js";
import { ObjectId } from "mongodb";

const getAllgames = async (req, res) => {
  try {
    const games = await gameService.getAll();
    res.status(200).json({ games: games });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal error in server" });
  }
};

const createGame = async (req, res) => {
  try {
    const { title, year, price, descriptions } = req.body;
    await gameService.Create(title, year, price, descriptions);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal error in server" });
  }
};

const deleteGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      await gameService.Delete(id);
      res.sendStatus(204);
    } else {
      res.status(400).json({ error: "The ID sended is invalid." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal error in server" });
  }
};

const updateGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const { title, year, price, descriptions } = req.body;
      const game = await gameService.Update(
        id,
        title,
        year,
        price,
        descriptions
      );
      res.status(200).json({ game });
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

const getOneGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const game = await gameService.getOne(id);
      if (!game) {
        res.status(404).json({ error: "O jogo não foi encontrado." });
      } else {
        res.status(200).json({ game });
      }
    } else {
      res.status(400).json({ error: "A ID enviada é inválida" });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export default { getAllgames, createGame, deleteGame, updateGame, getOneGame };