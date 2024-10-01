const target = {
  name: "John",
  age: 30,
};

let handler = {
  get: (target, prop) => {
    return target[prop];
  },
  set: (target, prop, value) => {
    target[prop] = value;
    return target[prop];
  },
};

let proxy = new Proxy(target, handler);

console.log(proxy.name); // Logs: Accessing property: name
// Then logs: John

proxy.age = 31; // Logs: Setting property: age = 31

console.log(proxy.age);
