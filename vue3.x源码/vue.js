const { effect, reactive } = require("@vue/reactivity");
let a = reactive({
  value: 1,
});
let b;
effect(() => {
  b = a.value + 10;
  console.log("--->", b);
});
a.value = 30;
