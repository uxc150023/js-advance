const myTargets = {};
const proxy = new Proxy(myTargets, {
  ownKeys(target) {
    console.log("ownKeys()");
    return Reflect.ownKeys(...arguments);
  },
});
Object.keys(proxy); // ownKeys();
