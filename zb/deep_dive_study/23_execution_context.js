// 23. 실행 컨텍스트
// 실행 컨텍스트는 자바스크립트의 동작 원리를 담고 있는 핵심 개념이다. 실행 컨텍스트를 이해하면
// 스코프를 기반으로 식별자와 식별자에 바인딩된 값, 호이스팅이 발생하는 이유, 클로저의 동작 방식 등을 이해할 수 있다.

// 23.1 소스코드의 타입
// ECMAScript 사양에 따르면 소스코드는 4가지 타입으로 구분할 수 있다. 4가지 타입의 소스코드는 실행 컨텍스트를 생성한다.
// 1. 전역 코드 : 전역에 존재하는 소스코드. 전역에 정의된 함수, 클래스 등의 내부 코드는 포함되지 않는다.
// 2. 함수 코드 : 함수 내부에 존재하는 소스코드. 함수 내부에 중첩된 함수, 클래스 등의 내부 코드는 포함되지 않는다.
// 3. eval 코드 : 빌트인 전역 함수인 eval 함수에 인수로 전달되어 실행되는 소스코드. strict mode 에서 eval 함수를 실행하면 eval 코드는 eval 코드 그 자체이다.
// 4. 모듈 코드 : 모듈 내부에 존재하는 소스코드. 모듈 내부의 함수, 클래스 등의 내부 코드는 포함되지 않는다.


// 23.2 소스코드의 평가와 실행
// 모든 소스코드는 실행에 앞서 해석 과정을 거치며 코드를 실행하기 위한 준비를 한다. 즉, "소스코드의 해석" 과 "소스코드의 실행" 과정으로 나누어 처리한다.
// 해석 과정에서는 실행 컨텍스트를 생성하고 변수, 함수 등의 선언문만 먼저 실행하여 생성된 변수나 함수 식별자를 키로 실행 컨텍스트가 관리하는 스코프에 등록한다.

// 해석 과정이 끝나면 런타임이 시작되고 소스코드가 순차적으로 실행된다.

var x;
x = 1;

// 1. 소스코드의 해석
// 해석 과정에서 var x; 를 먼저 실행하여 변수 선언문을 먼저 실행한다. 이때 실행 컨텍스트가 관리하는 스코프에 변수 식별자 x를 등록한다.
// 이때 변수 x는 undefined로 초기화된다. 여기까지가 소스코드의 해석 과정이다.

// 2. 소스코드의 실행
// 런타임이 시작되면 소스코드가 순차적으로 실행된다. 이때 x = 1; 을 실행하여 변수에 값을 할당한다.


// 23.3 실행 컨텍스트의 역할
// 아래 코드는 전역 변수와 전역 함수로 구성되어 있다.

// 전역 변수 선언
const x = 1;
const y = 2;

// 전역 함수
function foo(a) {
    const x = 10;
    const y = 20;

    // 메서드 호출
    console.log(a + x + y); // 130
}

// 전역 함수 호출
foo(100);

// 메서드 호출
console.log(x + y); // 3

// 1. 전역 코드 평가
// 전역 코드 평가 과정에 앞서 먼저 전역 실행 컨텍스트를 생성한다.
// 전역 실행 컨텍스트는 전역 객체(Global Object)를 생성하고 전역 코드가 평가되기 이전에 먼저 생성된다.
// 전역 객체는 전역 코드가 실행되기 이전에 생성되며 어디서든지 참조할 수 있다.
// x : 1, y : 2, foo : function() {...} 와 같은 전역 변수와 전역 함수는 전역 객체의 프로퍼티가 된다.

// Global Execution Context (전역 실행 컨텍스트)
// +--------------------------------------------------------+
// | x: 1                                                     |
// | y: 2                                                     |
// | foo: <function>                                          |
// +--------------------------------------------------------+

// 2. 전역 코드 실행
// 전역 코드 평가가 끝나면 이어서 전역 코드가 순차적으로 실행된다. 이때 전역 실행 컨텍스트가 관리하는 스코프는 전역 스코프다.
// 함수가 호출되면 함수 내부로 코드의 제어권이 이동한다. 이때 함수 실행 컨텍스트가 생성되고 실행된다. 함수 실행 컨텍스트는 함수가 호출되면 생성되고 함수의 실행이 종료되면 소멸한다.

// foo(100) Execution Context (foo 함수 실행 컨텍스트)
// +--------------------------------------------------------+
// | a: 100                                                   |
// | x: 10                                                    |
// | y: 20                                                    |
// +--------------------------------------------------------+

// 3. 함수 코드 평가
// 함수 코드 평가 과정에 앞서 먼저 함수 실행 컨텍스트를 생성한다. 파라미터와 지역 변수 선언문이 먼저 실행되어 함수 실행 컨텍스트가 관리하는 스코프에 등록된다.
// 또한 함수 내부에서 사용할 this, arguments와 같은 함수 자신과 관련된 식별자를 위한 바인딩도 생성한다.

// 4. 함수 코드 실행
// 함수 코드 평가가 끝나면 이어서 함수 코드가 순차적으로 실행된다. 이때 함수 실행 컨텍스트가 관리하는 스코프는 함수 스코프다.
// 즉, foo(100) 실행 컨텍스트가 종료되면, console.log(x + y) 실행 컨텍스트가 생성되어 결과 3이 출력된다.


// 23.4 실행 컨텍스트 스택
const x = 1;

function foo() {
    const y = 2;

    function bar() {
        const z = 3;
        console.log(x + y + z);
    }
    bar();
}

foo(); // 6

// *** 사진

// 23.5 렉시컬 환경
// 정적 환경이라고도 불리는 렉시컬 환경은 식별자와 식별자에 바인딩된 값, 그리고 상위 스코프에 대한 참조를 기록하는 자료구조로 실행 컨텍스트를 구성하는 컴포넌트다.
// 렉시컬 환경은 식별자와 식별자에 바인딩된 값, 그리고 상위 스코프에 대한 참조를
// 기록하는 자료구조로 실행 컨텍스트를 구성하는 컴포넌트다.

// 실행 컨텍스트 스택이 코드 실행 순서를 관리한다면
// 렉시컬 환경은 객체 형태의 스코프를 생성하여 키/값으로 스코프와 식별자를 관리한다.

// 즉 렉시컬 환경은 스코프르 구분하여 식별자를 등록하고 관리하는 저장소 역할을 하는
// 렉시컬 스코프의 실체다.

// 렉시컬 환경은 Record(레코드)와 Outer(아우터) 두 개의 컴포넌트로 구성된다.
// > Environment Record / Outer Environment Reference

// 레코드는 식별자를 키로 등록하고 해당 식별자에 바인딩된 값을 관리하는 저장소이다.
// 아우터는 상위 스코프에 대한 참조이다.

const person = {
    name: 'Lee',
    getName() {
        // this는 메서드를 호출한 객체를 가리킨다.
        return this;
    }
}

console.log(person.getName()); // Lee


