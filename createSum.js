function createSum(a) {
  function helper(b) {
    if (!b) {
      typeof a;
      return typeof a === "function" ? a.call(this, ...arguments) : a;
    } else {
      return createSum.call(this, a + b);
    }
  }

  return helper;
}

const sum1 = createSum(1);
console.log(sum1(2)(3)(2)());
