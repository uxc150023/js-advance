// console.log("--->", test);
// function test(test) {
//   console.log("--->", test);
//   var test = 234;
//   console.log("--->", test);
//   function test() {}
// }
// test(1);
// var aa = 1;
// var test = 123;

// 上下文对象 -> 函数及变量 -> 形参赋值 -> 函数声明 及 替换

// global = 100;
// function fn() {
//   console.log("--->", global);
//   global = 200;
//   console.log("--->", global);
//   var global = 300;
// }
// fn();
// var global;

// function test() {
//   console.log("--->", b); // undefined
//   if (a) {
//     var b = 100;
//   }
//   c = 234;
//   console.log("--->", c); // 234
// }
// var a;
// test();
// a = 10;
// console.log("--->", c); // 234

// oa = {
//   test: function () {},
//   a: undefined,
//   c: 234,
// };

// ao = {
//   b: undefined,
// };

// function bar() {
//   foo = 10;
//   function foo() {}
//   var foo = 11;
//   return foo;
// }
// console.log("--->", bar());
