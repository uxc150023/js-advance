// 作为对象不可枚举
const obj = {
  name: "zb",
  [Symbol("age")]: "20",
};
// for (const key in obj) {
//   console.log(key);
// }
console.log(obj[Symbol("age")]);
