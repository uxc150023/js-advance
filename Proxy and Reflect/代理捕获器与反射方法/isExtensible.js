const myTargets = {};
const proxy = new Proxy(myTargets, {
  isExtensible(target) {
    console.log("isExtensible()");
    return Reflect.isExtensible(...arguments);
  },
});
Object.isExtensible(proxy); // isExtensible()
