Object.setPrototypeOf is a method which takes in two arguments - the object (first argument) and the desired prototype (second argument).

From the above, the Animals function returns an object with the animalConstructor as prototype. The Cats function returns an object with catConstructor as it's prototype. catConstructor on the other hand, is given a prototype of animalConstructor.

Therefore, ordinary animals only have access to the animalConstructor but cats have access to the catConstructor and the animalConstructor.
