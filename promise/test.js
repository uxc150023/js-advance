class myPromise {
  constructor(fun) {
    this.status = "pending";
    this.resolveValue = null;
    this.rejectValue = null;
    this.onFullFilledList = [];
    this.onRejectedList = [];

    let resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.resolveValue = value;
        this.onFullFilledList.forEach((funItem) => funItem());
      }
    };
    let reject = (value) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.rejectValue = value;
        this.onRejectedList.forEach((funItem) => funItem());
      }
    };

    try {
      fun(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
}

myPromise.prototype.then = function (onFulfilled, onRejectd) {
  return new MyPromise(() => {
    if (this.status === "pending") {
      this.onFullFilledList.push(() => {
        let result = onFulfilled(this.resolveValue);
        // resolve(result);
        formatPromise(promise, result, resolve, reject);
      });
      this.onRejectedList.push(() => {
        let result = onRejectd(this.rejectValue);
        // resject(result);
        formatPromise(promise, result, resolve, reject);
      });
    }
    if (this.status === "fulfilled") {
      let result = onFulfilled(this.resolveValue);
      // resolve(result);
      formatPromise(promise, result, resolve, reject);
    }
    if (this.status === "rejected") {
      let result = onRejectd(this.rejectValue);
      // resject(result);
      formatPromise(promise, result, resolve, reject);
    }
  });
};

const formatPromise = (promise, result, resolve, reject) => {
  // 自己调自己
  if (promise == result) {
    return new Error("xxx");
  }
  // 基本数据类型
  if (typeof result === "object" && router !== null) {
    try {
      let then = result.then;
      if (typeof then === "function") {
        then.call(
          result,
          (res) => {
            resolve(res);
          },
          (res) => {
            reject(res);
          },
        );
      } else {
        resolve(result);
      }
    } catch (error) {
      reject(error);
    }
  } else {
    resolve(result);
  }
};

//
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 1000);
// });
// promise.then(
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   },
// );

MyPromise.prototype.all = (arr) => {
  return new MyPromise((resolve, reject) => {
    let resArr = [];
    let index = 0;
    function processData(i, data) {
      resArr[i] = datel;
      index++;
      if (index === arr.length) {
        resolve(resArr);
      }
    }
    for (let i = 0; i < arr.length; i++) {
      if (isPromise(arr[i])) {
        arr[i].then(
          (data) => {
            processData(i, data);
          },
          (err) => {
            reject(err);
            return;
          },
        );
      } else {
        processData(i, data);
      }
    }
  });
};
