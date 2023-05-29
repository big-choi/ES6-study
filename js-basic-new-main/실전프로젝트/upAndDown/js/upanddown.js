
let randomNumber = Math.floor(Math.random() * 100) + 1;
let count = 0;

document.querySelector('#try').onkeypress = function(e) {
    if (e.keycode == 13 || e.which == 13 ) {
        finding();
        return false;
    }
}

function finding() {
    let inputNumber = document.querySelector('#try').value;

    if (inputNumber >= 1 && inputNumber <= 100) {
        if (randomNumber > inputNumber) {
            // 입력한게 더 작다
            document.querySelector('#display').innerHTML = "UP!";
        } else if (randomNumber < inputNumber) {
            // 입력한게 더 크다
            document.querySelector('#display').innerHTML = "DOWN!";
        } else {
            document.querySelector('#display').innerHTML = "맞춤";
        }
        document.querySelector('#try').value = '';
        count++;
    } else {
        if (count >= 1) {
            alert('범위에 맞게 입력하셈');
        }
    }
}

finding();
