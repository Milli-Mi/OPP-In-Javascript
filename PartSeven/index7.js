function Animals (name, age) {
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

 function Cats (name, age, whiskerColor) {
   let newCat =  Animals(name, age);
   
 }
