function throttle(fn, delay = 300) {
  let flag = true;
  return () => {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn();
      flag = true;
    }, delay);
  };
}
