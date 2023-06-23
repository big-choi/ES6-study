// 객체는 객체 리터럴 방식 외에도 생성자 함수를 통해 생성할 수 있다.

// Object 생성자 함수
// new 연산자와 Object 생성자 함수를 호출하여 빈 객체를 생성할 수 있다.
// 이후 프로퍼티 또는 메서드를 추가하여 객체를 완성할 수 있다.

const person = new Object(); // 빈 객체 생성

// 프로퍼티 추가
person.name = 'Lee';
person.sayHello = function () {
    console.log(`Hi! My name is ${this.name}.`);
}

console.log(person); // {name: "Lee", sayHello: ƒ}
person.sayHello(); // Hi! My name is Lee.

// 생성자 함수란 new 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수를 말한다.
// 생성자 함수에 의해 생성된 객체를 인스턴스라 한다.
// 반드시 Object 생성자 함수를 사용해 빈 객체를 생성해야 하는 것은 아니다.

// 17.2 객체 리터럴에 의한 객체 생성
// 객체 리터럴에 의한 객체 생성은 단 하나의 객체만 생성한다.
// 따라서 동일한 프로퍼티를 갖는 객체를 여러 개 생성해야 한다면 객체 리터럴은 비효율적이다.

// 생성자 함수에 의한 객체 생성 방식의 장점
// 마치 객체를 생성하기 위한 템플릿(클래스)처럼 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있다.

// 생성자 함수
function Circle(radius) {
    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

// 인스턴스의 생성
const circle1 = new Circle(5); // 반지름이 5인 Circle 객체를 생성
const circle2 = new Circle(10); // 반지름이 10인 Circle 객체를 생성

console.log(circle1.getDiameter()); // 10
console.log(circle2.getDiameter()); // 20

// 생성자 함수는 객체(인스턴스)를 생성하는 함수다. new 연산자와 함께 호출되어 사용되며, 일반 함수와 구분하기 위해 첫 문자를 대문자로 쓴다.
// 만약 new 연산자와 함께 호출하지 않으면 일반 함수로서 호출된다.


// - 생성자 함수의 인스턴스 생성 과정
// 생성자 함수 몸체에서 수행하는 건, 인스턴스를 생성하고 생성된 인스턴스를 초기화하는 일을 한다.
// 생성자 함수가 인스턴스를 생성하는 것은 필수고, 인스턴스를 초기화하는 것은 선택이다.
// 자바스크립트 엔진은 암묵적인 처리를 통해 인스턴스를 생성하고 this에 바인딩한다.


// - new 연산자
// 일반 함수와 생성자 함수에 특별한 형식적 차이는 없다. new 연산자와 함께 함수를 호출하면 해당 함수는 생성자 함수로 동작한다.
// 다시 말해, 함수 객체의 내부 메서드 [[Construct]]를 호출한다. 단, [[Construct]] 메서드가 호출된다.
// 단, new 연산자와 함께 호출하는 함수는 non-constructor가 아닌 constructor로서 동작한다.