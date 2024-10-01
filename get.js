function isArray(value) {
  console.log({ value });

  const constr = Object.prototype.toString.call(value);
  return constr === `[object Array]`;
}

function get(data, path, defaultValue = undefined) {
  if (!isArray(path)) {
    path = path.replaceAll("[", ".").replaceAll("]", "").split(".");
  }
  let output = data;
  for (let accessor of path) {
    if (accessor in output) {
      output = output[accessor];
    } else {
      return defaultValue;
    }
  }
  return output;
}

const data = {
  user: {
    name: "John Doe",
    age: 30,
    address: {
      city: "New York",
      country: "USA",
    },
  },
  products: [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ],
};

console.log(get(data, "user.name")); // "John Doe"
console.log(get(data, "user.address.city")); // "New York"
console.log(get(data, "products[1].name")); // "Product 2"
console.log(get(data, "products[2].price")); // 30
console.log(get(data, "products[3].name", "Unknown")); // "Unknown"
console.log(get(data, "user.gender", "Not specified")); // "Not specified"
