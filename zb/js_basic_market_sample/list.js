import { makeDOMwithProperties } from "./utils/dom";

{/* <div class="product-card">
    <div class="product-image-con">
        <img src="public/assets/파프리카.jpg" alt="파프리카 2입">
            <button type="button" class="cart-toggle-btn">
                <img src="public/assets/cart.png" class="cart-image">
            </button>
    </div>
    <div class="product-description">
        <div class="product-name">파프리카 2입</div>
        <div class="product-price-con">
            <div class="product-discount-percent">20%</div>
            <div class="product-price">2,000원</div>
        </div>
        <div class="product-original-price">2,500원</div>
    </div>
</div> */}

const productCard = makeDOMwithProperties('div', {
    className: 'product-card',
});

// -- product-image-con
const productImageCon = makeDOMwithProperties('div', {
    className: 'product-image-con',
});

const productImage = makeDOMwithProperties('img', {
    src : 'public/assets/파프리카.jpg',
    alt : '파프리카'
});

const cartToggleBtn = makeDOMwithProperties('button', {
    className : 'cart-toggle-btn',
    type: 'button',
});

const cartImage = makeDOMwithProperties('img', {
    className: 'cart-image',
    src : 'public/assets/cart.png'
});

cartToggleBtn.appendChild(cartImage);

productImageCon.appendChild(productImage);
productImageCon.appendChild(cartToggleBtn);

// TODO : appendChild 유틸 함수 만들기
