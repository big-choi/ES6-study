// 20. strict mode

// 20.1. strict mode란?

function foo() {
  x = 10;
}
foo();

console.log(x); // 10

// 위의 코드는 에러가 발생하지 않는다. 이는 자바스크립트의 특징이다.
// 자바스크립트는 변수를 선언할 때 var 키워드를 사용하지 않아도 에러가 발생하지 않는다.
// 이는 의도치 않게 전역 변수가 선언되어 발생하는 부작용이 있다.
// 이러한 문제점을 해결하기 위해 ES5에서 strict mode가 도입되었다.

// 20.2 strict mode의 적용
// strict mode를 적용하려면 전역의 선두 또는 함수 몸체의 선두에 'use strict';를 추가한다.
'use strict';

function foo() {
  x = 10; // ReferenceError: x is not defined
}

// 함수 몸체의 선두에 추가하면 해당 함수와 중첩 함수에 strict mode가 적용된다.
// 코드 선두에 'use strict';를 위치시키지 않으면 strict mode가 제대로 적용되지 않는다.

// 20.3 전역에 strict mode를 적용하는 것은 피하자
// 전역에 적용한 strict mode는 스크립트 단위로 적용된다.

// 20.4 함수 단위로 strict mode를 적용하는 것도 피하자
// 어떤 함수는 strict mode를 적용하고 어떤 함수는 적용하지 않는 것은 바람직하지 않다.
// 그렇다고 모든 함수에 일일이 strict mode를 적용하는 것도 번거롭다.

// 20.5 strict mode가 발생시키는 에러
// 20.5.1 암묵적 전역
// 선언하지 않은 변수를 참조하면 ReferenceError가 발생한다.

// 20.5.2 변수, 함수, 매개변수의 삭제
// delete 연산자로 변수, 함수, 매개변수를 삭제하면 SyntaxError가 발생한다.

// 20.5.3 매개변수 이름의 중복
// 중복된 함수 매개변수 이름을 사용하면 SyntaxError가 발생한다.

// 20.5.4 with 문의 사용
// with 문을 사용하면 SyntaxError가 발생한다.

// 20.6 strict mode 적용에 의한 변화
// 1. 일반 함수의 this
// strict mode에서 함수를 일반 함수로서 호출하면 this에 undefined가 바인딩된다. 생성자 함수가 아닌 일반 함수 내부에서는 this를 사용할 필요가 없기 때문이다.
// 이때 에러는 발생하지 않는다.

// 2. arguments 객체
// strict mode에서는 매개변수에 전달된 인수를 재할당하여 변경해도 arguments 객체에 반영되지 않는다.

