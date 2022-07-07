class EventEmiter {
  constructor() {
    this.eventMap = new Map();
  }
  // 订阅
  on(type, callback) {
    if (this.eventMap.get(type) === undefined) {
      this.eventMap.set(type, [callback]);
    } else {
      let arr = this.eventMap.get(type);
      this.eventMap.set(type, arr.push(callback));
    }
  }

  // 发布
  emit(type, ...args) {
    if (this.eventMap.get(type) === undefined) {
      console.log("--->", "error");
    } else {
      let arr = this.eventMap.get(type);
      arr.forEach((fn) => {
        fn(...args);
      });
    }
  }

  // 删除
  off(type) {
    if (this.eventMap.get(type) === undefined) {
      console.log("--->", "没有相关订阅");
    } else {
      this.eventMap.delete(type);
    }
  }

  // 只执行一次
  once(type, callback) {}
}

const event1 = new EventEmiter();
const handle = (...rest) => {
  console.log(rest);
};
event1.on("click", handle);
event1.off("click");
event1.emit("click", 1, 2);
