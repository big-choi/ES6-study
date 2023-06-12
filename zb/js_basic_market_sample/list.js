import { getProductCard } from "./module/productCard.js";

const sectionDOM = document.getElementsByTagName('section')[0];

const productCard = getProductCard({
    "imgSrc": "./public/assets/파프리카.jpg",
    "id": 1,
    "name": "파프리카 2입",
    "discountPercent": 20,
    "price": 2000,
    "originalPrice": 2500
});

const productCard2 = getProductCard({
    "imgSrc": "./public/assets/삼겹살.jpg",
    "id": 2,
    "name": "구이용 삼겹살 600g",
    "discountPercent": 5,
    "price": 14820,
    "originalPrice": 15000
});

sectionDOM.appendChild(productCard);
sectionDOM.appendChild(productCard2);
