let arr = [];
Array.prototype.listeners = {};

Array.prototype.pushWithEvent = function (...elements) {
  this.push(...elements);
  this.triggerEvents("push", elements);
};

Array.prototype.popWithEvent = function (...elements) {
  const element = this.pop();
  this.triggerEvents("pop", element);
};

Array.prototype.addEventListener = function (eventName, callbak) {
  if (!this.listeners[eventName]) {
    this.listeners[eventName] = [];
  }
  this.listeners[eventName].push(callbak);
};

Array.prototype.triggerEvents = function (eventName, ...values) {
  const events = this.listeners[eventName];
  if (events) {
    events.forEach((event) => event.apply(this, values));
  }
};

// Usage example
arr.addEventListener("push", (ele) => {
  console.log(ele, "Pushed");
});

arr.addEventListener("pop", (ele) => {
  console.log(ele, "Popped");
});

arr.pushWithEvent(2, 4);
arr.pushWithEvent(4, 3);
arr.pushWithEvent(8);

arr.popWithEvent();
