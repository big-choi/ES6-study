var x = 'global';

function foo() {
    var x = 'local';
    console.log(x); // local
}

foo();

console.log(x); // global

// 모든 식별자(변수 이름, 함수 이름, 클래스 이름 등)는
// 자신이 선언된 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는
// 유효 범위가 결정된다. 이를 스코프라 한다.
// 즉, 스코프는 식별자가 유효한 범위를 말한다.

// 프로그래밍 언어에서는 스코프를 통해 식별자인 변수나 함수 등의 이름의
// 충돌을 방지하여 같은 이름의 변수를 사용할 수 있게 한다.

// 스코프 내에서는 식별자는 유일해야 하지만 다른 스코프에는 같은 이름의
// 식별자를 사용할 수 있다.

// 하지만 let이나 const로 선언한 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.

function foo() {
    var x = 1;
    var x = 2;
    console.log(x); // 2
}

foo();

function foo() {
    // let x = 1;
    let x = 2; // SyntaxError: Identifier 'x' has already been declared
    console.log(x);
}


// # 스코프의 종류
// 스코프는 전역 스코프와 지역 스코프로 구분할 수 있다.
// 전역 스코프는 어디서든지 참조할 수 있다. 반면 지역 스코프는 그렇지 않다.
// 지역 스코프는 함수 몸체 내부이며, 자신의 지역 스코프와 하위 지역 스코프에서 유효하다.

// 13.3 스코프 체인
// 변수를 참조할 때 자바스크립트 엔진은 스코프 체인을 통해 변수를 참조하는 코드의 스코프에서 시작하여 상위 스코프 방향으로 이동하며 선언된 변수를 검색한다.

// 전역 스코프
var globalVariable = "전역 변수입니다";

function outerFunction() {
    var outerVariable = "외부 변수입니다";

    function innerFunction() {
        var innerVariable = "내부 변수입니다";

        console.log(innerVariable);       // innerVariable에 접근
        console.log(outerVariable);       // outerVariable에 접근
        console.log(globalVariable);      // globalVariable에 접근
    }

    innerFunction();
}

outerFunction();

// innerFunction이 실행되면, 자바스크립트 엔진은 먼저 자신의 스코프에서 innerVariable을 찾습니다.
// 변수를 찾으면 해당 값을 사용하고, 찾지 못하면 다음으로 바깥쪽 스코프인 outerFunction에서 변수를 찾습니다.
// 그곳에서 변수를 찾으면 해당 값을 사용하고, 그래도 찾지 못하면 전역 스코프에서 변수를 찾습니다. 여전히 변수를 찾을 수 없다면 오류가 발생합니다.


// 13.5 렉시컬 스코프
var x = 1;

function foo() {
    var x = 10;
    bar();
}

function bar() {
    console.log(x);
}

foo(); // ?
bar(); // ?

// 자바스크립트는 렉시컬 스코프를 따르므로 함수를 어디서 호출했는지가 아니라
// 함수를 어디서 정의했는지에 따라 상위 스코프를 결정한다.
// 함수의 상위 스코프는 언제나 자신이 정의된 스코프다.

// 위 예제에서 bar 함수는 전역에서 정의되었으므로 전역 스코프를 상위 스코프로 갖는다.
// 따라서 bar 함수 내부에서 x를 참조하면 전역 변수 x를 참조한다.
// 그리고 bar 함수가 호출되면 호출된 곳이 어디인지 관계없이 자신이 기억하고 있는 상위 스코프, 즉 전역 스코프에서 x를 탐색하여 값을 찾는다.
// 그래서 위 예제를 실행하면 전역 변수 x의 값 1이 두 번 출력된다.
