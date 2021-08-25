const target = {};
Object.defineProperty(target, "foo", {
  configurable: false,
  writable: false,
  value: "bar",
});
const handler = {
  get() {
    return "qux";
  },
};
const proxy = new Proxy(target, handler);
console.log(proxy.foo); // TypeError
// 目标对象有一个不可配置且不可写的数据属性，那么在捕获器返回一个与该属性不同的值时，会抛出 TypeError