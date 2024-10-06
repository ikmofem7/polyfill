async function fetchWithRetry(url, params, retry) {
  try {
    return await fetch(url, params);
  } catch (error) {
    if (retry == 0) {
      throw error;
    }
    return await fetchWithRetry(url, params, retry - 1);
  }
}

let url = `https://jsonplaceholder1.typicode.com/posts`;

async function getData() {
  try {
    let resp = await fetchWithRetry(url, {}, 3);
    let res = await resp.json();
    console.log(res);
  } catch (ex) {
    console.log(ex);
  }
}
getData();
