//class
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
sign () {
  return 'This ${this.name} can sign'
}

dance () {
  return 'This ${this.name} can dance'
}

}

let bingoo = new Animal('Bingo', 'Hiaty')
console.log(bingoo);
