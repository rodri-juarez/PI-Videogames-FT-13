const router = require("express").Router();


module.exports = {
  videogames: require("./videogames"),
  genres: require("./genres"),
  videogame: require("./videogame"),
};
