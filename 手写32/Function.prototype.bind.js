Function.prototype.myBind = function (context, ...args) {
  var _self = this;
  let fn = Symbol();
  context[fn] = this;

  const result = function (...innerArgs) {
    if (this instanceof _this) {
      this[fn] = _this;
      this[fn](...[...args, ...innerArgs]);
      delete this[fn];
    } else {
      constext[fn](...[...args, ...innerArgs]);
      delete this[fn];
    }
  };
  result.prototype = Object.create(this.prototype);
  return result;
};
