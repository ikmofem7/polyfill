class EventEmitter {
  constructor() {
    this.eventMap = new Map();
  }

  subscribe(eventName, callback) {
    if (!this.eventMap.has(eventName)) {
      this.eventMap.set(eventName, new Map());
    }
    const callbackMap = this.eventMap.get(eventName);
    callbackMap.set(callback, (callbackMap.get(callback) || 0) + 1);
    return {
      release: () => {
        callbackMap.get(callback) <= 1
          ? callbackMap.delete(callback)
          : callbackMap.set(callback, callbackMap.get(callback) - 1);
      },
    };
  }

  emit(eventName, ...args) {
    const callbackMap = this.eventMap.get(eventName);
    for (let [callback, count] of callbackMap.entries()) {
      for (let i = 0; i < count; i++) {
        callback(...args);
      }
    }
  }
}

const emitter = new EventEmitter();

const subscription1 = emitter.subscribe("event1", (arg1, arg2) => {
  console.log(`Event1: ${arg1} ${arg2}`);
});
const subscription2 = emitter.subscribe("event2", () => {
  console.log("Event2 triggered");
});
const subscription3 = emitter.subscribe("event1", (arg1, arg2) => {
  console.log(`Another Event1: ${arg1} ${arg2}`);
});

emitter.emit("event1", 1, 2);
// Output:
// Event1: 1 2
// Another Event1: 1 2

subscription3.release();

emitter.emit("event1", 4, 5);
// Output:
// Event1: 4 5

emitter.emit("event2");
// Output:
// Event2 triggered
