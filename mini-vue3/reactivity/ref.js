let currentEffect;
class Dep {
  constructor(value) {
    this.effects = new Set();
    this._val = value;
  }

  get value() {
    this.depend();
    return this._val;
  }

  set value(newVal) {
    this._val = newVal;
    this.notice();
  }

  //依赖收集
  depend() {
    if (currentEffect) {
      this.effects.add(currentEffect);
    }
  }
  // 依赖触发
  notice() {
    this.effects.forEach((effect) => {
      effect();
    });
  }
}

function effectWatch(effect) {
  currentEffect = effect;
  effect();
  currentEffect = null;
}

let dep = new Dep(10);
let b;
effectWatch(() => {
  b = dep.value + 10;
  console.log("--->", b);
});

dep.value = 20;
