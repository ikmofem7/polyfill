const removeCircularReferences = (object) => {
  const visitedObj = new WeakSet([object]);

  function helper(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "object") {
          if (visitedObj.has(obj[key])) {
            delete obj[key];
          } else {
            visitedObj.add(obj[key]);
            helper(obj[key]);
          }
        }
      }
    }
  }

  helper(object);
};

// Create an object with circular references
const person = {
  name: "Alice",
  friend: null,
  details: {
    age: 30,
    address: {
      city: "New York",
    },
  },
};

const friend = {
  name: "Bob",
  friend: person, // Circular reference
};

person.friend = friend; // Circular reference
person.self = person; // Self-reference

// Log the original object (this may cause issues in some consoles due to circular reference)
// console.log("Original object:");
// console.log(JSON.stringify(person, null, 2));

// Remove circular references
removeCircularReferences(person);

// Log the modified object
console.log("Modified object:");
console.log(JSON.stringify(person, null, 2));
