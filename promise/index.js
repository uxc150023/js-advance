let obj = {
  a: null,
  b: function () {},
  c: undefined,
  d: [1, 2, 3],
};
let objjj = JSON.parse(JSON.stringify(obj));
console.log("--->", objjj);
