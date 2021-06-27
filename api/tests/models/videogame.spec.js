const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done()); 
      });
      it('should throw an error if description is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid description')))
          .catch(() => done());
      });
      it('should throw an error if released is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid released')))
          .catch(() => done());
      });
      it('should throw an error if plataform is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid plataform')))
          .catch(() => done());
      });

      it('should work when its a valid name', () => {
        Videogame.create({ name: 'Super Mario Bros' });
      });  


    });  
  });
});
