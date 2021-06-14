const { Router } = require("express");
require("dotenv").config();
const axios = require("axios").default;
const { Videogame, Genres } = require("../db.js");
const { v4: uuidv4 } = require("uuid");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const API_KEY = process.env.VIDEOGAMES_API_KEY;
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);  

router.get("/videogames", async (req, res) => {
  let name  = req.query.search;
  let page = req.query.page;
  console.log('-----entro a videogames----------')
  console.log(req.query)
  if (!name && !page || !name && page === '1') {
    try {
      console.log('en la ejecucion correcta para page 1')  
      const respuesta = [];
      const respuestaBase = await Videogame.findAll({ include: Genres });
      respuestaBase.forEach((element) => {
        if (respuesta.length <= 14) respuesta.push(element);
      });
      let response = await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}`
      );
      response.data.results.forEach((element) => {
        if (respuesta.length <= 14) respuesta.push(element);
      });
      return res.json(respuesta);
    } catch (error) {
      res.status(500).json({ error: "error del servidor" });
    }
  } 
  console.log(page)      
  if ( !name && page) {
     console.log('entro a ejecucion correcta para paginacion')
    try {
      const filtrado = [];
      
      let respuesta = await axios.get(
        `https://api.rawg.io/api/games?page=${page}&key=${API_KEY}`
      );
      respuesta.data.results.forEach((element) => {
        if (filtrado.length <= 14) filtrado.push(element);
      });
      return res.json(filtrado);
    } catch (error) {
      res.status(500).json({ error: "error del servidor" });
    }
  }  
    
  if (name) {
    console.log('entro a ejecucion de query por name')
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
  if (id) {
    try {
      const game = await Videogame.findOne({ where: { id: id } });
      if (game) return res.json(game);
      let respuesta = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
      );
      if (!respuesta)
        return res.status(404).json({ error: "Juego no encontrado" });
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
  let { name, description, relesead, rating, plataforms, genres } = req.body;
  let videogame = { id, name, description, relesead, rating, plataforms };
  console.log(genres)  
  let respuesta = await axios.get(
    `https://api.rawg.io/api/games?search=${videogame.name}&key=${API_KEY}`
  );
  console.log('-----respuesta api')
    
          
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
    
    await juego.setGenres(genres);
    
    return res.status(200).json("El juego ha sido creado exitosamente");
  }  
});    
 
module.exports = router;              
  