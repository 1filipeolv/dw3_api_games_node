// Importando o service
import userService from "../services/gameService.js";

// Função para CADASTRAR um Usuário
const createUser = async (req, res) => {
  try {
    // Coletando os dados do corpo da requisição
    const { name, email, password } = req.body;
    await userService.Create(name, email, password);
    res.status(201).json({ success: "Usuário cadastradocom sucesso!" }); // Cod. 201: CREATED
  } catch (error) {
    console.log(error);
    res.sendStatus(500); // Erro iinterno do servidor
  }
};

// FUNÇÃO para realizar o LOGIN
const loginUser = async(req,res) => {
    try {
        const {email, password} = req.body
        const user = await userService.getOne(email)
        if (user != undefined) {
            res.status(200).json({success: "Login efetuado com sucesso!"});
        } else {
            res.status(404).json({ error: "Usuário não encontrado!" });
        }
    } catch (error){
        console.log(error);
        res.sendStatus(500);
    }
}

export default { createUser, loginUser };
