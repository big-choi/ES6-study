let arr = document.querySelectorAll('#container > img');
let prevBtn = document.querySelector('#prev');
let nextBtn = document.querySelector('#next');

var current = 0;

showSlide(current);
prevBtn.onclick = prevSlide;
nextBtn.onclick = nextSlide;

function showSlide(n) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.display = 'none';
    }
    arr[n].style.display = 'block';
}

function nextSlide() {
    if (current === arr.length -1) {
        current = 0;
    } else {
        current++;
    }
    showSlide(current);
}

function prevSlide() {
    if (current === 0) {
        current = arr.length -1;
    } else {
        current--;
    }
    showSlide(current);
}







