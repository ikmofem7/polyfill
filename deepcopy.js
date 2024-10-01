function deepCopy(obj) {
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    const value = obj[key];
    if (typeof value === "object") {
      newObj[key] = deepCopy(value);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

let data = {
  name: "srika",
  books: {
    types: [1, 2, 2, 32, { a: { b: "c" } }],
    count: 0,
    isVisible: false,
  },
};
let result = deepCopy(data);
console.log(result);
