function deepCompareObjects(obj1, obj2) {
  if (
    obj1 === null ||
    obj2 === null ||
    typeof obj1 !== "object" ||
    typeof obj2 !== "object"
  ) {
    return obj1 === obj2;
  }
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (const key in obj1) {
    if (!obj2Keys.includes(key) || !deepCompareObjects(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}

// Example usage:
const obj1 = {
  a: 1,
  b: { c: 2, d: [3, 4] },
  e: [{ f: 5 }, { g: 6 }],
};

const obj2 = {
  a: 1,
  b: { c: 2, d: [3, 4] },
  e: [{ f: 5 }, { g: 6 }],
};

const obj3 = {
  a: 1,
  b: { c: 2, d: [3, 4] },
  e: [{ f: 5 }, { g: 7 }], // This value is different
};

console.log(deepCompareObjects(obj1, obj2)); // Output: true
console.log(deepCompareObjects(obj1, obj3)); // Output: false
console.log(deepCompareObjects(obj1, { a: 1 })); // Output: false
console.log(deepCompareObjects(null, null)); // Output: true
console.log(deepCompareObjects({}, {})); // Output: true
