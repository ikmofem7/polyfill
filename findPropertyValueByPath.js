const isArray = (value) => {
  const result = Object.prototype.toString.call(value) === "[object Array]";
  return result;
};

Object.prototype.findPropertyValueByPath = function (path) {
  if (!isArray(path)) {
    path = path.replaceAll("[", ".").replaceAll("]", "").split(".");
  }
  let current = this;
  for (let accessor of path) {
    if (accessor in current) {
      current = current[accessor];
    } else {
      return undefined;
    }
  }
  return current;
};

const user = {
  name: {
    first: "John",
    last: "Doe",
  },
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};
console.log(user.findPropertyValueByPath("name.first")); // Output: John
console.log(user.findPropertyValueByPath("address.city")); // Output: New York
console.log(user.findPropertyValueByPath("age")); // Output: 30
console.log(user.findPropertyValueByPath("name.last")); // Output: Doe
console.log(user.findPropertyValueByPath("address.country")); // Output: USA
console.log(user.findPropertyValueByPath("address.state")); // Output: undefined
