let cTof = true;
let exchange = document.querySelector('#exchange');

let source = document.querySelector('#source');
let target = document.querySelector('#target');

let sUnit = document.querySelector('#s-unit');
let tUnit = document.querySelector('#t-unit');

let sVal = document.querySelector('#s-value');
let tVal = document.querySelector('#t-value');

exchange.addEventListener('click', function () {
    sVal.value = '';
    tVal.value = '';

    if (cTof) {
        sUnit.innerHTML = `&#8451;`;
        tUnit.innerHTML = `&#8457;`;
        cTof = false;
    } else {
        sUnit.innerHTML = `&#8457;`;
        tUnit.innerHTML = `&#8451;`;
        cTof = true;
    }
})

exchange.click();

function calc() {
    let icon = sUnit.textContent;
    if(icon == '℃') {
        tVal.value = Math.round((sVal.value * 1.8) + 32);
    } else {
        tVal.value = Math.round((sVal.value - 32) / 1.8);
    }
}