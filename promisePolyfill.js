// Define the Promise class
class MyPromise {
  onResolve = null;
  onReject = null;

  status = "pending";
  called = false;

  value = undefined;
  error = undefined;

  constructor(executor) {
    const resolve = (value) => {
      this.value = value;
      this.status = "fullfilled";
      if (!this.called && typeof this.onResolve === "function") {
        this.onResolve(value);
        this.called = true;
      }
    };
    const reject = (error) => {
      this.error = error;
      this.status = "rejected";
      if (!this.called && typeof this.onReject === "function") {
        this.onReject(error);
        this.called = true;
      }
    };
    try {
      executor(resolve, reject);
    } catch (error) {}
  }
  then(thenHandler) {
    this.onResolve = thenHandler;
    if (!this.called && this.status === "fullfilled") {
      this.onResolve(this.value);
    }
    return this;
  }
  catch(catchHandler) {
    this.onReject = catchHandler;
    if (!this.called && this.status === "rejected") {
      this.onReject(this.error);
    }
    return this;
  }
  static resolve(value) {
    return new MyPromise((res) => {
      res(value);
    });
  }
  static reject(error) {
    return new MyPromise((res, rej) => {
      rej(error);
    });
  }
}

let p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject("this is resolved async");
  }, 2000);
});

p.then((data) => console.log(data)).catch((error) => console.log({ error }));

// MyPromise.resolve(34).then((data) => console.log(data));
// MyPromise.reject("it is failaed syncway").catch((error) =>
//   console.log(error, "error")
// );
