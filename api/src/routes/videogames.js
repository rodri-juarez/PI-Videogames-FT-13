const router = require("express").Router();
require("dotenv").config();
const axios = require("axios");
const API_KEY = process.env.API_KEY;
const { Sequelize } = require("sequelize");
const { Videogame, Genres } = require("../db.js");
const { v4: uuidv4 } = require("uuid");

router.get("/", async (req, res) => {
  let name = req.query.search;
  const respuesta = [];

  if (!name) {
    const resp = await Videogame.findAll({ include: Genres });
    if (resp.length > 20) {
      console.log(resp.length)  
      return res.status(200).json(resp);
    }
    const respuestaBase = await Videogame.findAll({ include: Genres });
    respuestaBase.map((element) => {
      return respuesta.push(element);
    });

    await axios
      .get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`)
      .then((response) => {
        let next = response.data.next;
        response.data.results.map((element) => {
          respuesta.push(element);
        });
        return next;
      })
      .then(async (next) => {
        const response = await axios.get(`${next}`);

        response.data.results.map((element) => {
          return respuesta.push(element);
        });
        return respuesta;
      })
      .then(async (respuesta) => {
        respuesta.forEach(async(game) => {
          const id = uuidv4();
          let videogame = {
            id,
            name: game.name,
            released: game.released,
            rating: game.rating,
            plataforms: game.platforms,
            background_image: game.background_image,
            description: 'game of rawng api'
          };
          const juego = await Videogame.create(videogame);

          while (game.genres.length) {
            let genre = game.genres.shift();    
            let newGenre = await Genres.findOne({
              where: {
                name: { [Sequelize.Op.iLike]: `${genre.name}` },
              },
            });
            await juego.addGenres(newGenre);
          }
        });
      })

      .catch((error) => {
        return res.status(500).json(error);
      });

    return res.status(200).json(respuesta);
  }

  if (name) {
    try {
      const filtrado = [];
      const respuestaBase = await Videogame.findAll({ where: { name: name } });
      respuestaBase.forEach((element) => {
        if (filtrado.length <= 14) filtrado.push(element);
      });
      const respuesta = await axios.get(
        `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
      );

      respuesta.data.results.forEach((element) => {
        if (filtrado.length <= 14) filtrado.push(element);
      });
      return res.json(filtrado);
    } catch (error) {
      res.status(500).json({ error: "error del servidor" });
    }
  }
});

module.exports = router;
