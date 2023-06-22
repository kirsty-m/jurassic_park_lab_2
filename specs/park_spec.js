const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 30);
    dinosaur3 = new Dinosaur('triceratops', 'herbivore', 20)
    let dinoArray = [dinosaur, dinosaur2, dinosaur3]
    park = new Park('Jurassic Park', 5, dinoArray)

  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 5);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [dinosaur, dinosaur2, dinosaur3]);
  });

  it('should be able to add a dinosaur to its collection', function(){
    dinosaur4 = new Dinosaur('stegasaurus', 'herbivore' , 15);
    park.addDinosaur(dinosaur4);
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [dinosaur, dinosaur2, dinosaur3, dinosaur4])
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(dinosaur);
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [dinosaur2, dinosaur3])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){

    const actual = park.mostVisitedDinosaur()
    assert.strictEqual(actual, 't-rex')

  });

  it('should be able to find all dinosaurs of a particular species'); 

  

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
