let coverImage = document.querySelector('#cover');
coverImage.onclick = function() {
    alert("눌렀음");
}
coverImage.onmouseover = function () {
    coverImage.style.border = "5px black solid";
}
coverImage.onmouseout = function () {
    coverImage.style.border = "";
}