const { effect, reactive, stop, ReactiveFlags } = require("@vue/reactivity");
const { watchEffect, } = require("@vue/runtime-core");

const obj = { foo: 1 }
effect(() => {
  console.log(obj.foo)
  track(obj, TrackOpTypes.GET, 'foo')
})

obj.foo = 2
trigger(obj, TriggerOpTypes.SET, 'foo')
