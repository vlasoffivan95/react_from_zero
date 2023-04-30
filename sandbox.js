const fs = require("fs/promises");

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(10), 2000);
// });

// promise
//   .then((resultOfPromise) => {
//     console.log(resultOfPromise);
//     return resultOfPromise ** 2;
//   })
//   .then((data) => {
//     console.log(data);
//     return data + 5
//   })
//   .then((data) => {
//     console.log(data);
//   });

// const arr = async () => {};

async function test() {
  try {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(Promise.reject(50)), 2000);
    });
    const data = await promise;
    console.log(data);
    throw new Error("keks");
  } catch (error) {
    console.log("error huzpa");
  }
}

test();

// test().then((data) => console.log(data));

// async function logFiles() {
//   fs.readdir(__dirname)
//     .then((filesArr) => {
//       const hiddenFiles = filesArr.filter((fileName) => fileName[0] === ".");
//       return hiddenFiles;
//     })
//     .then((files) => console.log(files));
// }

// async function logFiles () {
//     const filesArr = await fs.readdir(__dirname)
//     const hiddenFiles = filesArr.filter((fileName)=> fileName[0]==='.')
//     console.log(hiddenFiles)
// }

// logFiles();
