function deepClone(obj) {
  let obj_ = JSON.stringify(obj)
  return JSON.parse(obj_);
}
let a = [1, 2, 3, 4]
let b = deepClone(a);
b[0] = 2;
console.log(a, b);
// [ 1, 2, 3, 4 ] [ 2, 2, 3, 4 ]