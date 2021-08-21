const wm = new WeakMap();
class User {
  constructor(userId) {
    wm.set(this, userId);
  }
  set id(userId) {
    wm.set(this, userId);
  }
  get id() {
    return wm.get(this);
  }
}

const user = new User(123);
console.log(user.id); // 123
const userInstanceProxy = new Proxy(user, {});
console.log(userInstanceProxy.id); // undefined
