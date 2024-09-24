function assignObject(target, ...objs) {
  if (target == null) throw new Error("target is empty");
  if (typeof target !== "object") {
    target = Object(target);
  }
  objs.forEach((obj) => {
    if (obj !== null && obj !== undefined) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(obj));
    }
  });
  return target;
}

// Example usage
const person = {
  name: "John",
  age: 30,
};

const details = {
  occupation: "Engineer",
  location: "New York",
};

const mergedObject = assignObject({}, person, details);

console.log(mergedObject);
