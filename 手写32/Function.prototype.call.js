Function.prototype.myCall = function (context, ...args) {
  let fn = Symbol();
  context[fn] = this;
  return context[fn](...args);
};
