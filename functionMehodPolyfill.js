const person = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function (occupation, level) {
    return (
      this.firstName + " " + this.lastName + " " + occupation + " " + level
    );
  },
};

const person2 = {
  firstName: "Jane",
  lastName: "Smith",
};

console.log(person.getFullName()); // Output: John Doe

Function.prototype.myCall = function (object, ...args) {
  const uniqueId = Symbol("");
  object[uniqueId] = this;
  const result = object[uniqueId](...args);
  delete object[uniqueId];
  return result;
};

// Using call() to call person.getFullName() with person2's context
console.log(person.getFullName.myCall(person2, "carpenter")); // Output: Jane Smith

Function.prototype.myApply = function (object, args) {
  const uniqueId = Symbol("");
  object[uniqueId] = this;
  const result = object[uniqueId](args);
  delete object[uniqueId];
  return result;
};
console.log(person.getFullName.myApply(person2, ["carpenter"])); // Output: Jane Smith

Function.prototype.myBind = function (object, ...args) {
  return (...innerArgs) => {
    const uniqueId = Symbol("");
    object[uniqueId] = this;
    const result = object[uniqueId](...args, ...innerArgs);
    delete object[uniqueId];
    return result;
  };
};
const bindedFunc = person.getFullName.myBind(person2, ["carpenter"]);
console.log(bindedFunc("best")); // Output: Jane Smith
