//cach 1

// function getSanPham(getProducts) {
//     setTimeout(() => {
//         const sanPhams = [
//             { id: 1, name: 'Ti vi' },
//             { id: 2, name: 'Tu lanh' },
//             { id: 3, name: 'May giat' }
//         ];
//         getProducts(sanPhams);
//     }, 1000);
// }

// function getKhoHang(getStocks) {
//     setTimeout(() => {
//         const khoHang = [
//             { productId: 1, quantity: 12 },
//             { productId: 2, quantity: 10 },
//             { productId: 3, quantity: 40 }
//         ];
//         getStocks(khoHang);
//     }, 1000);
// }

// getSanPham((products) => {
//     getKhoHang((stocks) => {
//           //cách 1
//     // let tmp = [];
//     // for (let product of products) {
//     //     for (let stock of stocks) {
//     //         if(product.id === stock.productId) tmp.push({name: product.name, quantity: stock.quantity});
//     //     }
//     // }
//     // console.log(tmp);
            //cách 2
//     let tmp = {};
//     let result = [];
//     for (let product of products) {
//         tmp[product.id] = product;
//     }

//     for (let stock of stocks) {
//         result.push({name: tmp[stock.productId].name, quantity: stock.quantity});
//     }
//     console.log(result);
//     });
// });





//cach 2

function getSanPham() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const sanPhams = [
            { id: 1, name: 'Ti vi' },
            { id: 2, name: 'Tu lanh' },
            { id: 3, name: 'May giat' }
        ];
        resolve(sanPhams);
      }, 1000);
    });
 }

 function getKhoHang() {
    return new Promise((resolve, reject) => {
        const khoHang = [
            { productId: 1, quantity: 12 },
            { productId: 2, quantity: 10 },
            { productId: 3, quantity: 40 }
        ];
        resolve(khoHang);
    })
 }

 async function main() {
    let products = await getSanPham();
    let stocks = await getKhoHang();
    // cách 1
    // let tmp = [];
    // for (let product of products) {
    //     for (let stock of stocks) {
    //         if(product.id === stock.productId) tmp.push({name: product.name, quantity: stock.quantity});
    //     }
    // }
    // console.log(tmp);
            // cách 2
    let tmp = {};
    let result = [];
    for (let product of products) {
        tmp[product.id] = product;
    }

    for (let stock of stocks) {
        result.push({name: tmp[stock.productId].name, quantity: stock.quantity});
    }
    console.log(result);
 }

 main();
 