// setTimeout(nameFunction, time)
//Promises
// Status of a JS Promise:
//     + pending: chờ
//     + Fulfilled: hoàn thành
//     + Rejected: từ chối
// Promise object supports two properties: state ang result
    // + pending - undefined
    // + fulfilled - value
    // + rejected - an error object



// let myPromises = new Promise((myResolve, myReject) => {
//     let x = 0;

//     if (x === 0) myResolve("x == 0")
//     else myReject("x khac 0");
// });

// myPromises.then(
//     function(value) {
//         console.log('Success ', value);
//     },
//     function(err) {
//         console.log('Error', err);
//     }
// );


// Async Syntax
// async makes a function return a Promise
// await makes a function wait for a Promise

// function myFuntion() {
//     return Promise.resolve("Hello");
// }

async function myFuntion() {
    return "Hello";
}

myFuntion().then(
    function(value) {
        console.log("OK");
    },
    function(err) {
        console.log("Err");
    }

);

