async function delay(wait) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, wait);
  });
}

async function getdata() {
  console.log("arER");
  await delay(2000);
  console.log("hi");
}

getdata();
