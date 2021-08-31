const router = require("express").Router();
require("dotenv").config();
const axios = require("axios").default;
const { Sequelize } = require("sequelize");
const { Videogame, Genres } = require("../db.js");
const { v4: uuidv4 } = require("uuid");
const API_KEY = process.env.API_KEY;

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const ID = id.slice(1);

  if (ID) {
    if (ID.length < 9) {
      let respuesta = await axios.get(
        `https://api.rawg.io/api/games/${ID}?key=${API_KEY}`
      );
      if (respuesta) return res.json(respuesta.data);
    }

    try {
      const game = await Videogame.findOne({ where: { id: ID } });

      if (game) return res.json(game);

      if (!respuesta)
        return res.status(404).json({ error: "Juego no encontrado" });
    } catch (error) {
      res.status(500).json({ error: "error del servidor" });
    }
  }
  return res.status(404).json({ error: "Juego no encontrado" });
});

router.post("/", async (req, res) => {
  const id = uuidv4();
  let {
    name,
    description,
    released,
    rating,
    plataforms,
    creator,
    background_image,
    genres,
  } = req.body;
  let videogame = {
    id,
    name,
    description,
    released,
    rating,
    plataforms,
    background_image,
    creator,
  };

  let respuesta = await axios.get(
    `https://api.rawg.io/api/games?search=${videogame.name}&key=${API_KEY}`
  );

  if (respuesta) {
    let filtro = respuesta.data.results.find(
      (elemento) => elemento.name === videogame.name
    );
    if (filtro) return res.json({ error: "Este juego ya existe" });
  }

  const game = await Videogame.findOne({ where: { name: videogame.name } });

  if (game) return res.json({ error: "Este juego ya existe" });
  else {
    const juego = await Videogame.create(videogame);

    while (genres.length) {
      let genre = genres.shift();
      let newGenre = await Genres.findAll({
        where: {
          name: { [Sequelize.Op.iLike]: `${genre}` },
        },
      });
      await juego.addGenres(newGenre);
    }

    return res.status(200).json("El juego ha sido creado exitosamente");
  }
});

module.exports = router;
