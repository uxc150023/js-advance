const myTargets = () => {};
const proxy = new Proxy(myTargets, {
  apply(target, thisArg, ...argumentsList) {
    console.log("apply()");
    return Reflect.apply(...arguments);
  },
});
proxy(); // apply()
