/*
why: Because Javascript is single-threaded

Examples:
Fetching over a network
Many / Heavy calcualtions
Crytogrsphic functions
Reading / Writing to files
Database

*/

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("Yaaaaa");
//     reject("Rejectttt");
//   }, 3000);
// })
// .then((successMessage) => console.log("SuccessMessage: " + successMessage))
// .catch(errorMessage => console.log("errorMessage: " + errorMessage));

// function celebrate() {
//     return new Promise((resolve, reject) => {
//         reject("Celebrating");
//     });
// }

// celebrate()
// .then(result => console.log(result))
// .catch(errormsg => console.log("error"));

function somethingGoodSomethingBad() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve("Something Good");
      } catch {
        reject("Somehting Bad");
      }
    }, 2000);
  });
}

somethingGoodSomethingBad()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
