Object.myCreate = function (proto, propertiesObject) {
  if (typeof proto !== "object" && typeof propertiesObject !== "object") {
    throw Error("It should be object");
  }
  function F() {}
  F.prototype = proto;
  var obj = new F();
  if (typeof propertiesObject === "object") {
    Object.defineProperties(obj, propertiesObject);
  }
  return obj;
};

const obj1 = {};

Object.defineProperties(obj1, {
  name: {
    value: "John",
    writable: true,
    enumerable: true,
  },
  age: {
    value: 30,
    writable: false,
    enumerable: true,
  },
});

let obj = Object.myCreate(
  { name: "srikt" },
  {
    age: {
      value: 50,
      writable: true,
    },
  }
);
console.log(obj.__proto__);
