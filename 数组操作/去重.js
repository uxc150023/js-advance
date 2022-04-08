// ES6 set
function unique1(arr) {
  return Array.from(new Set(arr));
}
// 2层for循环 + splice
function unique2(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--; // 为什么j要--
      }
    }
  }
  return arr;
}

// indexOf
function unique3(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (array.indexOf(arr[i]) === -1) {
      array.push(arr[i]);
    }
  }
  return array;
}

console.log("--->", unique3([1, 2, 2, 3, 3, 4]));
