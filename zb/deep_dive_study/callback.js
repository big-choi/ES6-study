// 함수안에 함수를 넣어서 사용할 수 있다.
function callBack1(파라미터) {
    console.log('callBack1');
    파라미터();
}

function callBack2() {
    console.log('callBack2');
}

callBack1(callBack2);

function add() {
    return 1 + 2;
}

add();

var x = 1;

function addX() {
    var x = 10;
    console.log(`함수 : ${x}`);
}

console.log(`함수 밖 : ${x}`);
addX();

// 블록 레벨 스코프

let foo = 1;

{
    let foo = 2;
    let bar = 3;
}