// has()捕获器会在 in 操作符中被调用
const myTargets = {};
const proxy = new Proxy(myTargets, {
  has(target, property) {
    console.log("has()");
    return Reflect.has(...arguments);
  },
});
"name" in proxy; // has()
