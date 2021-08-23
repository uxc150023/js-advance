const myTargets = {};
const proxy = new Proxy(myTargets, {
  deleteProperty(target, property) {
    console.log("deleteProperty()");
    return Reflect.deleteProperty(...arguments);
  },
});
delete proxy.foo; // deleteProperty()
