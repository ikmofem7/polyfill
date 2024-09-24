// "use strict";

function curry(func) {
  function curriedFunction(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return (...moreArgs) => curriedFunction.call(this, ...args, ...moreArgs);
    }
  }

  return curriedFunction;
}

let concatenateStrings = (str1, str2, str3) => {
  return `${str1}_${str2}_${str3}`;
};

let curriedConcatenate = curry(concatenateStrings);

console.log(curriedConcatenate("Hello")("World", "2023"));
console.log(curriedConcatenate("Hello")("World")("2023"));
