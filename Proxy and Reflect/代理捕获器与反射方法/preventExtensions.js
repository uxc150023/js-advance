const myTargets = {};
const proxy = new Proxy(myTargets, {
  preventExtensions(target) {
    console.log("preventExtensions()");
    return Reflect.preventExtensions(...arguments);
  },
});
Object.preventExtensions(proxy); // preventExtensions()
