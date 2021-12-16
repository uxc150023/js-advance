function SuperType() {
  this.colors = ["red", "blue", "green"];
}

function SubType(params) {
  // 继承SuperType
  SuperType.call(this);
}

let instance = new SubType();
instance.colors.push("black");
console.log(instance.colors); // [ 'red', 'blue', 'green', 'black' ]

let instance2 = new SubType();
console.log(instance2.colors); // [ 'red', 'blue', 'green' ]
