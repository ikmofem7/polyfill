function mergeObjects(...objs) {
  let target = {};

  function helper(obj1, obj2) {
    for (let key in obj2) {
      const element = obj2[key];
      if (typeof element === "object") {
        obj1[key] = helper(obj1[key] || {}, element);
      } else {
        obj1[key] = obj2[key];
      }
    }
    return obj1;
  }

  for (let obj of objs) {
    target = helper(target, obj);
  }

  return target;
}
let obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
    f: "f",
  },
};

let obj2 = {
  g: "g",
  h: "h",
  a: "c",
  c: {
    g: "g",
  },
};

let res = mergeObjects(obj1, obj2);
console.log(res, "res");
