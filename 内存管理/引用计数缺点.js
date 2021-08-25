function f() {
  var o1 = {};
  var o2 = {};
  o1.p = o2; // o1 references o2
  o2.p = o1; // o2 references o1. This creates a cycle.
}
f();

// 两个对象被创建并相互引用，这就创建了一个循环
// 函数调用结束，引用计数算法认为，由于两个对象中的每一个都被至少引用了一次，所以两者都不能被垃圾收集