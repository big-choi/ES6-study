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

// 20.3 전역에 strict mode를 적용하는 것은 피하자
// 전역에 적용한 strict mode는 스크립트 단위로 적용된다.
//
