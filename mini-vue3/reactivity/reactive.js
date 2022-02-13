const targetMap = new Map();
let currentEffect;

class Dep {
  constructor(value) {
    this.effects = new Set();
    this._value = value;
  }

  get value() {
    return this._value;
  }
  set value(newValue) {
    this._value = newValue;
  }

  depend() {
    if (currentEffect) {
      this.effects.add(currentEffect);
    }
  }
  notice() {
    this.effects.forEach((effect) => {
      effect();
    });
  }
}

export function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) {
      // key - dep
      let depsMap = targetMap.get(target);
      if (!depsMap) {
        depsMap = new Map();
        targetMap.set(target, depsMap);
      }

      let dep = depsMap.get(key);
      if (!dep) {
        dep = new Dep();
        depsMap.set(key, dep);
      }
      dep.depend();
      return Reflect.get(target, key);
    },
    set(target, key, value) {
      let depsMap = targetMap.get(target);
      if (!depsMap) {
        depsMap = new Map();
        targetMap.set(target, depsMap);
      }

      let dep = depsMap.get(key);
      if (!dep) {
        dep = new Dep();
        depsMap.set(key, dep);
      }
      let result = Reflect.set(target, key, value);
      dep.notice();
      return result;
    },
  });
}

export function effectWatch(effect) {
  currentEffect = effect;
  effect();
  currentEffect = null;
}

const user = reactive({
  age: 19,
});

let b;
effectWatch(() => {
  b = user.age;
});

user.age++;
console.log("--->", b);
