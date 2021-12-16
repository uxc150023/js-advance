// 值传递
"use strict";
let obj1 = {};
function changeValue(obj) {
  obj = { name: "code秘密花园" };
  obj1.name = "ConardLi";
  // a = 1;
  console.log(obj);
}
changeValue(obj1);
// console.log(obj.name); // ConardLi
