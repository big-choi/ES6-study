var userId = document.querySelector('#');
userId.change = checkId;

function checkId() {
    if (userId.value.legnth < 4 || userId.value.legnth > 15) {
        alert('4~15자리의 영문과 숫자를 사용하세요');
        userId.select();
    }
}
