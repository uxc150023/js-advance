export const obj = {
  a: 1,
};
export let b = 0;
setTimeout(() => {
  obj.a++;
  b++;
}, 1000);
