// 18.1 일급 객체
// 다음 조건을 만족하면 일급 객체라고 부른다.
// 1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
// 2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
// 3. 함수의 파라미터에 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.

const increase = function (num) {
    return ++num;
}

const decrease = function (num) {
    return --num;
}

const predicates = { increase, decrease };

function makeCounter(predicate) {
    let num = 0;

    return function () {
        num = predicate(num);
        return num;
    };
}

// 함수가 일급 객체라는 것은 함수를 객체와 동일하게 사용할 수 있다는 의미다. 따라서 함수를 값처럼 변수에 할당할 수 있고 프로퍼티 값이 될 수도 있다.
// 함수는 객체이지만 일반 객체와는 다르다. 일반 객체는 호출할 수 없지만 함수는 호출할 수 있다.
// 그리고 함수 객체는 일반 객체에는 없는 함수 고유의 프로퍼티를 소유한다.

// 18.2 함수 객체의 프로퍼티
// 함수는 객체이므로 프로퍼티를 소유할 수 있다. 함수 객체는 arguments, caller, length, name, prototype 프로퍼티를 갖는다.

// # arguments 프로퍼티
// arguments 객체는 함수 호출 시 전달된 인수(argument)들의 정보를 담고 있는
// 순회 가능한(iterable) 유사 배열 객체이며, 함수 내부에서 지역 변수처럼 사용된다.
// 파라미터와 인수의 개수가 일치하지 않는 경우에도 에러가 발생하지 않는다.

function multiply(x, y) {
    console.log(arguments);
    return x * y;
}

console.log(multiply()); // NaN
console.log(multiply(1)); // NaN
console.log(multiply(1, 2)); // 2
console.log(multiply(1, 2, 3)); // 2

// arguments 객체는 배열형태로 파라미터를 받아오지만 실제 배열이 아닌 유사배열이기 때문에 배열 메서드를 사용할 수 없다.
// 배열 메서드를 사용하려면 Function.prototype.apply 메서드를 사용해야 한다.
// 하지만 번거러움이 있기 때문에 ES6에서는 Rest 파라미터를 사용하는 것을 권장한다.

function sum(...args) {
    return args.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3, 4, 5)); // 15
