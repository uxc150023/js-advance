const target = new Date();
const proxy = new Proxy(target, {});
console.log(proxy instanceof Date); // true 
proxy.getDate(); // TypeError: 'this' is not a Date object
// 有些 ECMAScript 内置类型可能会依赖代理无法控制的机制，结果导致在代理上调用某些方法会出错