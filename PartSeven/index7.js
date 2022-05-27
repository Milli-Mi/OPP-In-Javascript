function Animal(name, age) {
  let newAnimal = Object.create(animalConstructor);
  newAnimal.name = name;
  newAnimal.age = age;
  return newAnimal;
}
