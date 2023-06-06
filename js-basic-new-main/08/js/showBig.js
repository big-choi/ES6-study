var bigPic = document.querySelector('#cup');
var smallPics = document.querySelectorAll('.small');

for (let i = 0; i < smallPics.length; i++) {
    smallPics[i].onclick = function () {
        bigPic.src = this.src;
    }
}