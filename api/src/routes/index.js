const { Router } = require("express");
require("dotenv").config();
const axios = require("axios").default;
const { Sequelize } = require("sequelize");
const { Videogame, Genres } = require("../db.js");
const { v4: uuidv4 } = require("uuid");

// Importar todos los routers; 
// Ejemplo: const authRouter = require('./auth.js');

const API_KEY = process.env.API_KEY;   
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/videogames", async (req, res) => {
  let name = req.query.search;
  const respuesta = [];

  if (!name) {
    const respuestaBase = await Videogame.findAll({ include: Genres });
    respuestaBase.map((element) => {
      return respuesta.push(element);
    });
    
    let response = await axios
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
        next = response.data.next;
        return ;
      })
      
      .catch((error) => {
        return res.status(500).json(error);
      });
    
    
    return res.json(respuesta);
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

router.get("/videogame/:id", async (req, res) => {
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

router.get("/genres", async (req, res) => {
  
  let response = await axios.get(
    `https://api.rawg.io/api/genres?key=${API_KEY}`
  );
  response.data.results.map((genero) =>
    Genres.findOrCreate({ where: { name: genero.name } })
  );

  const generos = await Genres.findAll();

  const generosFiltrados = generos.sort(function (a, b) {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    return 0;
  });

  return res.json(generosFiltrados);
});

router.post("/videogame", async (req, res) => {
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
      let nuevoGenre = await Genres.findAll({
        where: {
          name: { [Sequelize.Op.iLike]: `${genre}` },
        },
      });
      await juego.addGenres(nuevoGenre);
    }
    
    return res.status(200).json("El juego ha sido creado exitosamente");
  }
});

module.exports = router;
