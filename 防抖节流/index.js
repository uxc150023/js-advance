/**
 * 防抖
 * 事件触发之后n秒执行回调，若事件再次触发则重新计时
 * @param {*} fun
 * @param {*} delay
 * @returns
 */
function debounce(fun, delay) {
  let timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun();
      clearTimeout(timer);
    }, delay);
  };
}

/**
 * 节流
 * 规定的时候只能触发一次函数，若果触发多次，只有一次生效
 * @param {*} fun
 * @param {*} delay
 */
function throttle(fun, delay) {
  let time1 = null;
  let _lastTime = +new Date();
  return () => {
    let _nowTime = +new Date();
    if (_lastTime - _nowTime >= delay) {
      _lastTime = _nowTime;
      fun();
    } else {
      time1 = setTimeout(() => {
        fun();
      }, delay);
    }
  };
}
