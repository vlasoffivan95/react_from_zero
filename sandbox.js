// const fs = require("fs/promises");

// // const promise = new Promise((resolve, reject) => {
// //   setTimeout(() => resolve(10), 2000);
// // });

// // promise
// //   .then((resultOfPromise) => {
// //     console.log(resultOfPromise);
// //     return resultOfPromise ** 2;
// //   })
// //   .then((data) => {
// //     console.log(data);
// //     return data + 5
// //   })
// //   .then((data) => {
// //     console.log(data);
// //   });

// // const arr = async () => {};

// async function test() {
//   try {
//     const promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve(Promise.reject(50)), 2000);
//     });
//     const data = await promise;
//     console.log(data);
//     throw new Error("keks");
//   } catch (error) {
//     console.log("error huzpa");
//   }
// }

// test();

// // test().then((data) => console.log(data));

// // async function logFiles() {
// //   fs.readdir(__dirname)
// //     .then((filesArr) => {
// //       const hiddenFiles = filesArr.filter((fileName) => fileName[0] === ".");
// //       return hiddenFiles;
// //     })
// //     .then((files) => console.log(files));
// // }

// // async function logFiles () {
// //     const filesArr = await fs.readdir(__dirname)
// //     const hiddenFiles = filesArr.filter((fileName)=> fileName[0]==='.')
// //     console.log(hiddenFiles)
// // }

// // logFiles();

function sumOfThree(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(sumOfThree(3, 4, 5));

function curriedSum(num1) {
  return function inner1(num2) {
    return function inner2(num3) {
      return num1 + num2 + num3;
    };
  };
}

const inner1 = curriedSum(3);
const inner2 = inner1(4);
const res = inner2(5);
const res2 = inner2(10);
// console.log(res);
// console.log(res2);

function calcCartCost(discount, price, amount) {
  return price * amount - price * amount * discount;
}

// console.log(calcCartCost(0.1, 1000, 5));

function curriedCalcCartCost(discount) {
  return function (price) {
    return function (amount) {
      return price * amount - price * amount * discount;
    };
  };
}

const curriedSums = (num1) => (num2) => (num3) => num1 * num2 * num3;
// const with10PercentDiscount = curriedCalcCartCost(0.1)
// const withPrice1000And10PercentDiscount = with10PercentDiscount(1000)
// const withPrice2000And10PercentDiscount = with10PercentDiscount(2000)
// const res1 = withPrice1000And10PercentDiscount(5)
const result1 = curriedCalcCartCost(0.1)(2)(3);
const result2 = curriedSums(0.1)(2)(3);
console.log(result1);
console.log(result2);
