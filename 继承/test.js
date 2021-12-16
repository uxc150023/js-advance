// 构造函数继承
// function A(a) {
//   this.a = a;
// }

// A.prototype.sayA = function () {
//   console.log("A");
// };

// function B(b) {
//   this.b = b;
// }

// function AB(a, b) {
//   this.ab = "ab";
//   A.call(this, a);
//   B.call(this, b);
// }

// let ab = new AB("aa", "bb");
// 原型链继承
// function A() {
//   this.a = "a";
// }

// function b() {
//   this.b = "b";
// }

// function AB() {
//   this.ab = "ab";
// }
// AB.prototype = new A();
// AB.prototype.constructor = AB;
// let ab = new AB();

// 组合继承
// function A(a) {
//   this.a = a;
// }
// A.prototype.sayA = function () {
//   console.log("sayA");
// };

// function AB(ab, a) {
//   this.ab = ab;
//   A.call(this, a);
// }
// AB.prototype = new AB();

// let ab = new AB(1, 2, 3);
// 原型式继承
// function A() {
//   this.a = "a";
// }
// A.prototype.sayA = function () {
//   console.log("sayA");
// };

// function BZ(obj) {
//   function F() {}
//   F.prototype = obj;
//   return new F();
// }

// let obj = new A();
// let val = BZ(obj);
// console.log(val.sayA());

// 寄生继承
// function A() {
//   this.a = "a";
// }
// A.prototype.sayA = function sayA() {
//   console.log("sayA");
// };

// function BZ(obj) {
//   function B() {}
//   B.prototype = obj;
//   B.prototype.constructor = B;
//   return new B();
// }

// function BZZ(obj) {
//   let b = BZ(obj);
//   b.sayB = function sayB() {
//     console.log("sayB");
//   };
//   return b;
// }
// let obj = new A();
// let b = BZZ(obj);
// b.sayB();

// 寄生组合继承
// function A(a) {
//   this.a = "a";
// }
// A.prototype.sayA = function sayA() {
//   console.log("sayA");
// };

// function BZ(obj) {
//   let B = function () {};
//   B.prototype = obj;
//   return new B();
// }
// let obj = A.prototype;
// let bz = BZ(obj);

// function BZZ(bzz, a) {
//   this.bzz = "bzz";
//   A.call(this, "a");
// }

// BZZ.prototype = bz;
// BZZ.prototype.constructor = BZZ;

// let a1 = new BZZ();
// let a2 = new BZZ();
// a1 = 2;
// console.log(a2);
// class

// new
// function newFn(constructor, [...arg]) {
//   let obj = {};
//   obj.__proto__ = constructor.prototype;
//   let res = constructor.apply(this, arg);
//   if (typeof res === "object" && JSON.stringify(res) !== "{}") {
//     return res;
//   } else {
//     return obj;
//   }
// }

// function A() {
//   this.a = "a";
// }

// let obj = newFn(A, [1, 2, 3]);
// console.log(obj);
// console.log(obj.a);

function A() {
  this.a = "a";
}
A.prototype.sayA = function () {
  console.log("sayA");
};
let b = new A();
let c = new A();
b.a = 1;
console.log(c.a);
