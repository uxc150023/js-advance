function Animal() {
  this.price = 1000;
}
Animal.price = 1000;
Animal.prototype.price = 20;
var Dog = function () {};
Dog.prototype = new Animal();
var cat = Animal;
var dog = new Dog();

console.dir(dog.price);
console.log(cat.price);
