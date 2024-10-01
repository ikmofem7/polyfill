const handler = {
  get: (target, prop) => {
    if (prop === Symbol.iterator) {
      return target[prop].bind(target);
    }
    if (typeof prop == "string") {
      const index = parseInt(prop, 10);
      if (!isNaN(index)) {
        return target[index >= 0 ? index : target.length + index];
      }
    }
    return target[prop];
  },
  set: (target, prop, value) => {
    if (typeof prop == "string") {
      const index = parseInt(prop, 10);
      if (!isNaN(index)) {
        target[index >= 0 ? index : target.length + index] = value;
        return true;
      }
    }
    target[prop] = value;
    return true;
  },
};

const createWrappedArray = (arr) => {
  return new Proxy(arr, handler);
};

// Example usage
const arr = [1, 2, 3, 4, 5];
const wrappedArray = createWrappedArray(arr);

console.log(wrappedArray[0]); // 1
console.log(wrappedArray[-1]); // 5 (negative indexing)
console.log(wrappedArray[6]); // undefined (out of range)
console.log([...wrappedArray]); // [1, 2, 3, 4, 5]

wrappedArray[-2] = 6; // Assign value using negative index
console.log(wrappedArray[-2]); // 6
console.log(wrappedArray[3]); // 6
