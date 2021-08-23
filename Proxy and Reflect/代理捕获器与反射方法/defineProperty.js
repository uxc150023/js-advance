const myTargets = {};
const proxy = new Proxy(myTargets, {
  defineProperty(target, property, descriptor) {
    console.log("defineProperty()");
    return Reflect.defineProperty(...arguments);
  },
});
Object.defineProperty(proxy, "foo", { value: "bar" }); // defineProperty()
