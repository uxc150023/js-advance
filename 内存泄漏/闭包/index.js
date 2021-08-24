let outer = function () {
  let name = 'Jake';
  return function () {
    return name;
  };
};

outer(); // 内部函数有对name的引用，导致name不能被清除
// 解决方案
// 手动设置 name = null;
