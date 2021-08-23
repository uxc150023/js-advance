const myTargets = {};
const proxy = new Proxy(myTargets, {
  get(target, property, receiver) {
    console.log("get()");
    return Reflect.get(...arguments);
  },
});

proxy.foo; // get()
