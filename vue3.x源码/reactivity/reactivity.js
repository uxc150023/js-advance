//响应式库

//依赖
let currentEffect;
class Dep {
  // 1.依赖收集
  constructor(val) {
    this.effects = new Set();
    this._val = val;
  }

  get value() {
    this.depend();
    return this._val;
  }

  set value(newVal) {
    this._val = newVal;
    this.notice();
  }

  depend() {
    if (currentEffect) {
      this.effects.add(currentEffect);
    }
  }

  // 2.触发依赖
  notice() {
    // 触发一下我们之前收集到的依赖
    this.effects.forEach((effert) => {
      effert();
    });
  }
}

function effectWatch(effert) {
  // 收集依赖
  currentEffect = effert;
  effert();
  currentEffect = null;
}

const dep = new Dep(10);

let b;
effectWatch(() => {
  b = dep.value + 10;
  console.log("--->", b);
});

// 值变更
dep.value = 20;

//1.对象在什么时候改变
