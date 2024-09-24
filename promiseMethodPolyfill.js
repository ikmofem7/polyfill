// Promise.myAll = function (iterators) {
//   return new Promise((resolve, reject) => {
//     const result = [];
//     let completed = 0;
//     iterators.map(async (promise, index) => {
//       try {
//         const response = await promise;
//         result[index] = response;
//         completed++;
//         if (iterators.length === completed) {
//           resolve(result);
//         }
//       } catch (error) {
//         // console.log({ error });
//         reject(error);
//       }
//     });
//   });
// };

// const promise1 = Promise.reject(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "foo");
// });

// Promise.myAll([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.log({ error });
//   });

// const promise4 = Promise.resolve(50);
// const promise5 = new Promise((resolve, reject) =>
//   setTimeout(() => reject("Error occurred"), 1000)
// );

// Promise.myAllSettled = function (iterators) {
//   return new Promise((resolve) => {
//     const result = [];
//     let completed = 0;
//     iterators.map(async (promise) => {
//       try {
//         const response = await promise;
//         completed++;
//         result.push({ status: "fullfilled", value: response });
//         if (completed === iterators.length) {
//           resolve(result);
//         }
//       } catch (error) {
//         completed++;
//         result.push({ status: "rejected", reason: error });
//         if (completed === iterators.length) {
//           resolve(result);
//         }
//       }
//     });
//   });
// };

// const promises = [promise4, promise5];

// Promise.myAllSettled(promises)
//   .then((results) => {
//     results.forEach((result) => {
//       console.log(result);
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Promise.myRace = function (iterators) {
//   return new Promise((resolve, reject) => {
//     iterators.map(async (promise) => {
//       try {
//         const response = await promise;
//         resolve(response);
//       } catch (error) {
//         reject(error);
//       }
//     });
//   });
// };

// const promise6 = Promise.resolve(50);
// const promise7 = new Promise((resolve, reject) =>
//   setTimeout(() => reject("Error occurred"), 1000)
// );

// const promises = [promise6, promise7];

// Promise.race(promises)
//   .then((results) => {
//     console.log({ results });
//   })
//   .catch((error) => {
//     console.error(error);
//   });

Promise.myAny = function (iterators) {
  return new Promise((resolve, reject) => {
    const errors = [];
    let completed = 0;
    iterators.map(async (promise, index) => {
      try {
        const response = await promise;
        resolve(response);
      } catch (error) {
        errors[index] = error;
        completed++;
        if (completed === iterators.length) {
          reject(new AggregateError("All promises were rejected", errors));
        }
      }
    });
  });
};

const promise8 = Promise.reject(50);
const promise9 = new Promise((resolve, reject) =>
  setTimeout(() => reject("Error occurred"), 1000)
);

const promises = [promise8, promise9];

Promise.myAny(promises)
  .then((results) => {
    console.log({ results });
  })
  .catch((error) => {
    console.log(error);
  });
