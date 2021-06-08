const { Router } = require("express");
require("dotenv").config();
const axios = require("axios").default;
const { Videogames, Genres } = require("../db.js");
var { nanoid } = require("nanoid");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
/* const videogames = require('./videogames.js');
const videogame = require('./videogames.js');
const genres = require('./genres.js'); */
const API_KEY = process.env.VIDEOGAMES_API_KEY;
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/videogames", async (req, res) => {
  const { name } = req.query;
  /* console.log(name); */
  if (!name) {
    try {
      let respuesta = [];
      let response = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}`
      );
      response.data.results.forEach((element) => {
        if (respuesta.length <= 14) respuesta.push(element);
      });
      console.log("---------pedido de juegos exitoso------------");
      return res.json(respuesta);
    } catch (error) {
      res.status(500).json({ error: "error del servidor" });
    }
  }
  if (name) {
    try {
      let filtrado = [];
      let respuesta = await axios.get(
        `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
      );
      respuesta.data.results.forEach((element) => {
        if (filtrado.length <= 14) filtrado.push(element);
      });
      console.log("--------filtrado por nombre exitoso-------------");
      return res.json(filtrado);
    } catch (error) {
      res.status(500).json({ error: "error del servidor" });
    }
  }
});

router.get("/videogame/:id", async (req, res) => {
  const { id } = req.params;
  if (id) {
    try {
      let respuesta = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
      );
      if (!respuesta)
        return res.status(404).json({ error: "Juego con encontrado" });
      console.log("------busqueda por nombre exitosa------");
      return res.json(respuesta.data);
    } catch (error) {
      res.status(500).json({ error: "error del servidor" });
    }
  }
  return res.status(404).json({ error: "Juego no encontrado" });
});

router.get("/genres", async (req, res) => {
  let response = await axios.get(
    `https://api.rawg.io/api/genres?key=${API_KEY}`
  );
  return res.json(response.data);
});

router.post("/videogame", async (req, res) => {
  const { name, description, plataform, released, rating, genres } = req.body;
  console.log(name);
  console.log(plataform);
  let respuesta = await axios.get(
    `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
  );
  if (respuesta) {
    let filtro = respuesta.data.results.find(
      (elemento) => elemento.name === name
    );
    if (filtro) return res.json({ error: "Este juego ya existe" });
  }
  console.log("-------------------");
  const videogame = await Videogames.findOne({ where: { name: name } });
  console.log(videogame);
  if (videogame) return res.json({ error: "Este juego ya existe" });
  else {
    const nuevoVideogame = await Videogames.create({
      where: {
        name: name,
        description: description,
        plataform: plataform,
        released: released,
        rating: rating,
      },
    });
    await nuevoVideogame.setGenres(genres);
    return res
      .status(200)
      .json({ mensaje: "El juego ha sido creado exitosamente" });
  }

});

module.exports = router;
