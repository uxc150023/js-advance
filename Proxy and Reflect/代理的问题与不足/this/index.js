const target = {
  m: function () {
    console.log(this === proxy)
  }
}
const handler = {}
const proxy = new Proxy(target, handler)
target.m() // false
proxy.m() // true
// 一旦proxy代理target，target.m()内部的this就是指向proxy，而不是target