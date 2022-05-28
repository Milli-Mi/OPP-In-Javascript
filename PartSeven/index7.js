function Animal (name, age) {
  let newAnimal = Object.create(animalConstructor);
  newAnimal.name = this.name;
  newAnimal.age = this.age;
  return newAnimal;
}
 let animalConstructor = {
   sign: function() {
     return `This ${this.name} can sign`
   },

   dance: function() {
     return `This ${this.name} can dance`
   }
 }
