const myTargets = {};
const proxy = new Proxy(myTargets, {
  setPrototypeOf(target, prototype) {
    console.log("setPrototypeOf()");
    return Reflect.setPrototypeOf(...arguments);
  },
});
Object.setPrototypeOf(proxy, Object); // setPrototypeOf()
