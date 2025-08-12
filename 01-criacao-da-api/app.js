import express from "express";
const app = express()

// Configurações do Express
app.use(express.urlencoded({ extend: false}));
app.use(express.json())

app.get("/", (req, res) => {
    const games = [
        {
            title: "Delta",
            year: 2024,
            genre: "FPS",
            platform: "PC (Windows)",
            price: 0,
        },
        {
            title: "Diablo III",
            genre: "RPG",
            year: 2009,
            platform: "PC (Windows)",
            price: 150,
        },
        {
            title: "League of Legends",
            genre: "MOBA",
            year: 2009,
            platform: "PC (Windows)",
            price: 0,
        },
    ];
    res.json(games); // Enviando a resposta
});


// Rodando a API na porta 4000
const port = 4000;
app.listen(port, (error) => {
    if (error) {
        console.log(error)
    }
    console.log(`API rodando em http://localhost:${port}`)
});