const get = (obj, path) => {
  function helper(object, pathArr) {
    let current = object;
    for (let accesor of pathArr) {
      if (current[accesor]) {
        current = current[accesor];
      } else {
        return undefined;
      }
    }
    return current;
  }

  if (!Array.isArray(path)) {
    path = path.replaceAll("[", ".").replaceAll("]", "").split(".");
  }
  console.log({ path });
  return helper(obj, path);
};

const set = (obj, path, value) => {
  function helper(object, pathArr) {
    const [current, ...next] = pathArr;
    if (next.length === 0) {
      object[current] = value;
    } else {
      if (!object[current]) {
        object[current] = isNaN(next[0]) ? {} : [];
      }
      helper(object[current], next);
    }
  }

  if (!Array.isArray(path)) {
    path = path.replaceAll("[", ".").replaceAll("]", "").split(".");
  }
  console.log({ path });

  return helper(obj, path);
};

// Initial object for testing
let obj = {
  a: {
    b: {
      c: 1,
    },
  },
  d: [1, 2, 3],
  e: {
    f: [{ g: "test" }],
  },
};
// Test cases for get function
console.log(get(obj, "a.b.c"));
// Expected output: 1

console.log(get(obj, "d[1]"));
// Expected output: 2

console.log(get(obj, "e.f[0].g"));
// Expected output: 'test'

console.log(get(obj, "x.y.z"));
// Expected output: undefined (non-existent path)

// Test cases for set function
set(obj, "a.b.c", 42);
console.log(obj.a.b.c);
// Expected output: 42

set(obj, "d[1]", 99);
console.log(obj.d[1]);
// Expected output: 99

set(obj, "e.f[0].g", "updated");
console.log(obj.e.f[0].g);
// Expected output: 'updated'

set(obj, "x.y.z", "new value");
console.log(obj.x.y.z);
