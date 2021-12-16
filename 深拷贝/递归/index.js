function clone(target) {
  if (typeof target === "object") {
    let cloneTarget = Array.isArray(target) ? [] : {};
    for (let key in target) {
      cloneTarget[key] = clone(target[key]);
    }
    return cloneTarget;
  } else {
    return target;
  }
}

let obj = { a: { b: [1, 2, 3, 4] } };
let copy = clone(obj);
// copy.a.b[0] = 2;
console.log(copy);
