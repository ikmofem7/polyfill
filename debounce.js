function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function saveChanges(data) {
  console.log("Saving changes:", data);
}

const debouncedSave = debounce(saveChanges, 1000);

// Simulating multiple rapid calls to debouncedSave
debouncedSave("Data 1");
debouncedSave("Data 2");
debouncedSave("Data 3");

// After 1 second, only the last call will be executed
