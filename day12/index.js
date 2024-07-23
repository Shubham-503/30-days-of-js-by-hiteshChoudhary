// Activity 1
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 1 resolved");
  }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise 2 rejected");
  }, 2000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 3 resolved");
  }, 2000);
});

promise1.then((val) => {
  console.log(val);
});
promise2.catch((error) => console.log(error));

// Activity 2
async function fetchData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("fetchData1 resolved");
    }, 500);
  });
}
function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("fetchData 2 resolved");
    }, 500);
  });
}
function fetchData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("fetchData3 resolved");
    }, 500);
  });
}
function fetchData4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("fetchData3 rejected");
    }, 500);
  });
}

fetchData1()
  .then((val) => {
    console.log(val);
    return fetchData2();
  })
  .then((val) => {
    console.log(val);
    return fetchData3();
  })
  .then((val) => {
    console.log(val);
  });

// Activity 3

(async function () {
  const val = await fetchData1();
  console.log("from activity 3", val);
  try {
    const val2 = await fetchData4();
  } catch (error) {
    console.log("error: ", error);
  }
})();

// Activity 4
const apiUrl = "https://api.github.com/";
fetch(apiUrl)
  .then((res) => res.json())
  // .then((res) => console.log("api res from promise: ", res))
  .catch((err) => console.log("api error from promise", err));

const fetchData5 = async () => {
  try {
    let val = await fetch(apiUrl);
    val = await val.json();
    console.log("api res from async/await: ", val);
  } catch (error) {
    console.log("error from async/await", error);
  }
};

fetchData5();

// Activity 5
(async () => {
  try {
    const res = await Promise.all([promise1, promise3, fetchData1(), promise2]);
    console.log("promise all", res);
    const res2 = await Promise.race([promise1, promise3, promise2]);
    console.log("promise race", res2);
  } catch (error) {
    console.log("error: ", error);
  }
})();
