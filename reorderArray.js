function reorderArray(array = [], newOrder = []) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result[newOrder[i]] = array[i];
  }
  return result;
}

const fruit = ["Apple", "Banana", "Orange", "Mango"];
const newOrder = [2, 0, 3, 1];

console.log(reorderArray(fruit, newOrder));
