const myTargets = {};
const proxy = new Proxy(myTargets, {
  getPrototypeOf(target) {
    console.log("getPrototypeOf()");
    return Reflect.getPrototypeOf(...arguments);
  },
});
Object.getPrototypeOf(proxy); // getPrototypeOf()
