function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
  var str = this.owner + " loves " + this.name + ".";
  return str;
}


var cat1 = new Cat("Jeff", "People");
var cat2 = new Cat("Haseeb", "People");
console.log(cat1.cuteStatement());

Cat.prototype.cuteStatement = function() {
  var str = "Everyone loves " + this.name + ".";
  return str;
}
console.log(cat1.cuteStatement());

Cat.prototype.meow = function() {
  console.log("meow");
}
cat1.meow();

cat1.meow = function() {
  console.log("bark");
}

cat1.meow();
cat2.meow();
module.exports = Cat
