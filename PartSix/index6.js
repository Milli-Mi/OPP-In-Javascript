class Animalss {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sign() {
    return `This ${this.name} can sign`
  }
  dance() {
    return `This ${this.name} can dance`
  }
}

class Cats extends Animalss { 
  
  constructor(name, age, whiskers) {
    super(name, age);
    this.whiskers = whiskers;

    }

    color() {
      return `This ${this.name} has ${this.whiskers}`
    }
}
 
let baby = new Cats('Mimo', 45, 'red')


console.log(baby);
console.log(baby.color());
