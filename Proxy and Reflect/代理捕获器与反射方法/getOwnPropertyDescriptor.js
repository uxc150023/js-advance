const myTargets = {};
const proxy = new Proxy(myTargets, {
  getOwnPropertyDescriptor(target, property) {
    console.log("getOwnPropertyDescriptor()");
    return Reflect.getOwnPropertyDescriptor(...arguments);
  },
});
Object.getOwnPropertyDescriptor(proxy, "foo"); // getOwnPropertyDescriptor()
// 返回对象，或者在属性不存在时返回 undefined
