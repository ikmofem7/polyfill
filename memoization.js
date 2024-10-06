const memoise = (func) => {
  const map = new Map();
  return (...args) => {
    const key = `${args}`;
    if (!map.has(key)) {
      const value = func(...args);
      map.set(key, value);
    }
    return map.get(key);
  };
};

function add(a, b, c) {
  console.log("called");
  return a + b + c;
}

function factorial(n) {
  console.log("called");
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

let memoiseAdd = memoise(add);
console.log(memoiseAdd(1, 2, 3));
console.log(memoiseAdd(1, 2, 3));
console.log(memoiseAdd(1, 2, 4));
let memoisefactorial = memoise(factorial);

console.log(memoisefactorial(5));
console.log(memoisefactorial(6));
console.log(memoisefactorial(5));
