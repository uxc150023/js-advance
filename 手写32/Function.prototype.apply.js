Function.prototype.myApply = function (context, array) {
  let fn = Symbol();
  context[fn] = this;
  return context[fn](...args);
};
