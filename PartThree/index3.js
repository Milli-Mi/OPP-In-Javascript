// new keywords

 function DogObject (name, age) {
   this.name = name;
   this.age = age; 
 }
DogObject.prototype.speak = function () {
  return 'I am a dog';
}

let John = new DogObject('Bim', 45);
console.log(John);
