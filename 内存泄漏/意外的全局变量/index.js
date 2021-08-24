function setName() {
  name = 'Jake';
}
//相当于
function setName() {
  window.name = 'Jake';
}
// 在 window 对象上创建的属性，只要 window 本身不被清理就不会消失

// 解决办法
// 在变量声明前头加上 let 或 const 关键字即可
// 变量就会在函数执行完毕后离开作用域。