const flattenArray = (array, depth = 2) => {
  if (depth === 0) return array;
  const result = [];

  for (const element of array) {
    if (Array.isArray(element)) {
      result.push(...flattenArray(element, depth - 1));
    } else {
      result.push(element);
    }
  }

  return result;
};

const nestedArray = [1, [2], [3, [4]], [5, [6, [7, [8]]]]];

console.log(flattenArray(nestedArray, 2));
