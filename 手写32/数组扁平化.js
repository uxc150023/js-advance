// 1. 递归
function flatter(arr, array = []) {
  let aaa = array || [];
  arr.forEach((v) => {
    if (Array.isArray(v)) {
      flatter(v, aaa);
    } else {
      aaa.push(v);
    }
  });
  return aaa;
}
// console.log(flatter([1, 2, [1, [2, 3, [4, 5, [6]]]]]));
// [
//   1, 2, 1, 2,
//   3, 4, 5, 6
// ]

// 2. 迭代
function flatter1(arr) {
  if (!arr.length) return;
  while (
    arr.some((v) => {
      return Array.isArray(v);
    })
  ) {
    arr = [].concat(...arr);
  }
  return arr;
}
console.log(flatter1([1, 2, [1, [2, 3, [4, 5, [6]]]]]));
