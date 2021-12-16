class MyPromise {
  constructor(fun) {
    this.status = "pending";
    this.resolveValue = undefined;
    this.rejectValue = undefined;

    this.onFulfilledList = [];
    this.onRejectedList = [];

    let resolve = (val) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.resolveValue = val;
        this.onFulfilledList.forEach((fn) => fn());
      }
    };
    let reject = (val) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.rejectValue = val;
        this.onRejectedList.forEach((fn) => fn());
      }
    };

    try {
      fun(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  let promise = new MyPromise((resolve, reject) => {
    if (this.status === "fulfilled") {
      setTimeout(() => {
        try {
          let result = onFulfilled(this.resolveValue);
          // resolve(result);
          formatPromise(promise, result, resolve, reject);
        } catch (error) {
          reject(error);
        }
      }, 0);
    }

    if (this.status === "rejected") {
      setTimeout(() => {
        try {
          let result = onRejected(this.rejectValue);
          reject(result);
          // formatPromise(promise, result, resolve, reject);
        } catch (error) {
          reject(val);
        }
      }, 0);
    }

    if (this.status === "pending") {
      this.onFulfilledList.push(() => {
        setTimeout(() => {
          try {
            let result = onFulfilled(this.resolveValue);
            resolve(result);
            // formatPromise(promise, result, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      });
      this.onRejectedList.push(() => {
        setTimeout(() => {
          try {
            let result = onRejected(this.rejectValue);
            reject(result);
            // formatPromise(promise, result, resolve, reject);
          } catch (error) {
            reject(val);
          }
        }, 0);
      });
    }
  });
  return promise;
};

const formatPromise = (promise, result, resolve, reject) => {
  if (promise === result) {
    return new Error("xxxxxx");
  }

  if (condition) {
  }
};

let fn = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    console.log(1111);
    resolve(1);
  }, 1000);
});
fn.then((value) => {
  console.log(value);
  return 2;
})
  .then((value) => {
    console.log(value);
    return 3;
  })
  .then((value) => {
    console.log(value);
  });
