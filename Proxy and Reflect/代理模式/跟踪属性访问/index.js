const user = {
  name: "jack",
};
const proxy = new Proxy(user, {
  get(target, property) {
    console.log(`Getting ${property}`);
    return Reflect.get(...arguments);
  },
  set(target, property) {
    console.log(`Setting ${property}`);
    return Reflect.get(...arguments);
  },
});
proxy.name;
proxy.name = "zb";
