const compose = (...funcs) => {
  return (initialValue) =>
    funcs.reduceRight((accumalator, func) => {
      accumalator = func(accumalator);
      return accumalator;
    }, initialValue);
};

const pipe = (...funcs) => {
  return (initialValue) =>
    funcs.reduce((accumalator, func) => {
      accumalator = func(accumalator);
      return accumalator;
    }, initialValue);
};

//left to right=> pipe
// right to left==> compose
const add5 = (number) => number + 5;
const multiplyBy2 = (number) => number * 2;
const square = (number) => number ** 2;
const subtract10 = (number) => number - 10;

// Example using compose
const calculateResultCompose = compose(subtract10, square, multiplyBy2, add5);
const resultCompose = calculateResultCompose(3);
console.log(resultCompose);

// Example using pipe
const calculateResultPipe = pipe(add5, multiplyBy2, square, subtract10);
const resultPipe = calculateResultPipe(3);
console.log(resultPipe);
