const { effect, reactive, stop } = require("@vue/reactivity");
const { watchEffect, } = require("@vue/runtime-core");
const obj = reactive({ foo: 1, too: 2, doo: 3 })
const obj1 = reactive({ foo: 1, too: 2, doo: 3 })

watchEffect(() => {
  console.log(obj.foo)
  console.log(obj.foo)
})
// obj.foo++
obj.too++
obj.too++
obj.too++
obj.too++
// obj1.doo++
