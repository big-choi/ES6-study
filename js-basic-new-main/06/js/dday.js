var now = new Date(); // 오늘 날짜
var firstDay = new Date('2023-05-01'); // 기준일

var toNow = now.getTime(); // 오늘 날짜를 밀리초로
var toFirst = firstDay.getTime(); // 기준일을 밀리초로
var passedTime = toNow - toFirst; // 차이 밀리초
var passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24)); // 그걸 일수로 다시 (1000*60*60*24)
document.querySelector('#accent').innerHTML = `${passedDay}일`;

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

function calcDate(days) {
    var future = toFirst + days * (1000 * 60 * 60 * 24);
    var someday = new Date(future);
    var year = someday.getFullYear();
    var month = someday.getMonth() + 1;
    var date = someday.getDate();
    document.querySelector('#date' + days).innerHTML = `${year}년 ${month}월 ${date}일`
}

