function createTimeout() {
  let timerId = 0;
  let timerIdMap = {};
  function setTimeoutPoly(callback, delay) {
    let id = timerId++;
    timerIdMap[timerId] = true;
    const start = Date.now();
    function triggerCallback() {
      if (!timerIdMap[id]) return;
      if (Date.now() > start + delay) {
        callback();
      } else {
        requestIdleCallback(triggerCallback);
      }
    }

    requestIdleCallback(triggerCallback);
    return id;
  }
  function clearTimeoutPoly(timerId) {
    delete timerIdMap[timerId];
  }
  return { setTimeoutPoly, clearTimeoutPoly };
}

const { setTimeoutPoly, clearTimeoutPoly } = createTimeout();

console.log("Start");
var myId = setTimeoutPoly(function () {
  console.log("Welcome to jscafe");
}, 2000);
var myId2 = setTimeoutPoly(function () {
  console.log("Welcome to jscafe2");
}, 1000);
console.log({ myId });
clearTimeoutPoly(myId);
