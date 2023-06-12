import { getProductList } from "./module/productList.js";

const productList = getProductList([{
    "imgSrc": "./public/assets/파프리카.jpg",
    "id": 1,
    "name": "파프리카 2입",
    "discountPercent": 20,
    "price": 2000,
    "originalPrice": 2500
},
{
    "imgSrc": "./public/assets/당근.jpg",
    "id": 2,
    "name": "당근 2입",
    "discountPercent": 20,
    "price": 2000,
    "originalPrice": 2500
}]);

document.body.appendChild(productList);