const router = require("express").Router();
require("dotenv").config();
const axios = require("axios");
const API_KEY = process.env.API_KEY;
const { Sequelize } = require("sequelize");
const { Videogame, Genres } = require("../db.js");

router.get("/", async (req, res) => {
  const generos = await Genres.findAll();
  if (generos.length > 1) {
    const generosFiltrados = generos.sort((a, b) => (a.id > b.id ? 1 : -1));
    return res.json(generosFiltrados);
  }
  let response = await axios.get(
    `https://api.rawg.io/api/genres?key=${API_KEY}`
  );
  response.data.results.map((genero) =>
    Genres.findOrCreate({ where: { name: genero.name } })
  );
  const genres = await Genres.findAll();
  const generosFiltrados = genres.sort((a, b) => (a.id > b.id ? 1 : -1));

    return res.json(generosFiltrados);
});

module.exports = router;
