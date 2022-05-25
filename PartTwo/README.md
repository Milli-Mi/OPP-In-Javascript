The __proto__ property
This points to the object which is used as a prototype.

This is the property on every object that gives it access to the Object prototype property.

Every object has this property by default, which refers to the Object Protoype except when configured otherwise (that is, when the object's __proto__ is pointed to another prototype).

Modifying the __proto__ property
This property can be modified by explicitly stating that it should refer to another prototype. The following methods are used to achieve this:

Object.create()
function DogObject(name, age) {
    let dog = Object.create(constructorObject);
    dog.name = name;
    dog.age = age;
    return dog;
}
let constructorObject = {
    speak: function(){
        return "I am a dog"
    }
}
let bingo = DogObject("Bingo", 54);
console.log(bingo);
