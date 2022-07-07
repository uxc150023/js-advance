function p1() {
  return new Promise((resolve, reject) => {
    resolve(1);
  });
}
function p2() {
  return new Promise((resolve, reject) => {
    resolve(2);
  });
}

p1()
  .finally(p2)
  .then((value) => {
    console.log("--->", value);
  })
  .then((value) => {
    console.log("--->", value);
  });
