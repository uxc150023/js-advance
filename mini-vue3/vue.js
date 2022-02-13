const { effect, reactive, stop } = require("@vue/reactivity");
const obj = reactive({ foo: 1, too: 2, doo: 3 });
const obj1 = reactive({ foo: 1, too: 2, doo: 3 });

let a = reactive({
  value: 1,
});
let b;
effect(() => {
  b = a.value + 10;
  console.log("--->", b);
});
a.value = 30;
