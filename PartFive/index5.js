
function Animals(name, species) {
  this.name = name;
  this.species = species;
}

Animals.prototype.sign = function() {
  return `this.name can sign`
}
 Animals.prototype.dance = function() {
   return `this.name can dance`
 }

 let bind = new Animals('Binggo', 'Andi')
 
 
 console.log(bind)
  
