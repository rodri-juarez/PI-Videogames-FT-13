/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');
const { v4: uuidv4 } = require("uuid");
const Model = require('../../src/models/Videogame')


const agent = session(app);
const videogame = {
  id: uuidv4(),
  name: 'Super Mario Bros',
  description: 'juego de prueba',
  released: '02-04-2012',
  plataforms: ['PC'],
};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);  
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));
  describe('GET /videogames', () => {
    it('should get 200', () =>
      agent.get('/videogames').expect(200)   
    );
  });
});




describe('Genres ', () => {
  describe('GET /genres', () => {
    it('should get 19', () =>
      agent.get('/genres').toHaveLength(19)    
    );
    it('should get 200', () =>
      agent.get('/genres').expect(200)
    );
  });
});



describe('Modelos de DB ', () => {
  describe('GET /genres', () => {
    it('should get 19', () =>
      agent.get('/genres').toHaveLength(19)    
    );
    it('should get 200', () =>
      agent.get('/genres').expect(200)
    );
  });
});

