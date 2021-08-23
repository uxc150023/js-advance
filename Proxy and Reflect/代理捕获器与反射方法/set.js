// set()捕获器会在设置属性值的操作中被调用
const myTargets = {};
const proxy = new Proxy(myTargets, {
  set(target, property, value, receiver) {
    console.log("set()");
    return Reflect.set(...arguments);
  },
});
proxy.name = "zb"; // set()
