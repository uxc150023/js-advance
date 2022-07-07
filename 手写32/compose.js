function compose(...fn) {
  if (!fn.length) {
    return (v) => {
      v;
    };
  }
  return fn.reduce((a, b) => {
    return;
  });
  return fn.reduce((a, b) => {
    return (...args) => {
      return a(b(...args));
    };
  });
}

function fn1(x) {
  return x + 1;
}

function fn2(x) {
  return x + 2;
}

function fn3(x) {
  return x + 3;
}

function fn4(x) {
  return x + 4;
}

const a = compose(fn1, fn2, fn3);
console.log("--->", a(1));
