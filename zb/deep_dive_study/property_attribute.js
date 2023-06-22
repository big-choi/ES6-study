// 내부 슬롯과 내부 메서드는 자바스크립트 엔진의 내부 로직이므로 직접 접근할 수 없지만
// 간접적으로 접근할 수 있는 수단을 제공한다.
// 이를 통해 자바스크립트 엔진의 내부 로직에 접근할 수 있다.
// ECMAScript 사양에 등장하는 모든 객체는 [[Prototype]]이라는 내부 슬롯을 갖는다.
// [[Prototype]] 내부 슬롯의 경우, __proto__ 접근자 프로퍼티로 간접적으로 접근할 수 있다.

const o = {};

// 내부 슬롯은 자바스크립트 엔진의 내부 로직이므로 직접 접근할 수 없다.
// o.[[Prototype]]; // Uncaught SyntaxError: Unexpected token '['

// 단, 일부 내부 슬롯과 내부 메서드에 한하여 간접적으로 접근할 수 있는 수단을 제공한다.
o.__proto__; // Object.prototype

// 16.2 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체
// 자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.
// 프로퍼티 어트리뷰트에 직접 접근할 수 없지만 Object.getOwnPropertyDescriptor 메서드를 사용하여 간접적으로 확인할 수 있다.

const person = {
    name: 'Lee'
};

console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// {value: "Lee", writable: true, enumerable: true, configurable: true}

// 16.3 데이터 프로퍼티와 접근자 프로퍼티
// 프로퍼티는 데이터 프로퍼티와 접근자 프로퍼티로 구분할 수 있다.
// 데이터 프로퍼티는 키와 값으로 구성된 일반적인 프로퍼티를 말한다.
// 접근자 프로퍼티는 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수로 구성된 프로퍼티를 말한다.
