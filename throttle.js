function throttle(func, delay) {
  let lastArgs = [],
    timerId = false;

  return function (...args) {
    if (timerId) {
      lastArgs = args;
      return;
    }
    func(...args);
    timerId = true;
    setTimeout(() => {
      timerId = false;
      func(...lastArgs);
      lastArgs = [];
    }, delay);
  };
}

// Example usage
function logMessage(message) {
  console.log(message);
}

const throttledLog = throttle(logMessage, 1000);

throttledLog("Message 1");
throttledLog("Message 2");
throttledLog("Message 3");
