function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

let person = {
  name: "Nincholas",
  friends: ["Shelby", "Court", "Vant"],
};

let anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");
