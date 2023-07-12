// ### 26.1 함수의 구분
var foo = function () {
    return 1;
};

// 일반적인 함수로서 호출
foo(); // 1

// 생성자 함수로서 호출
new foo(); // foo {}

// 메서드로서 호출
var obj = { foo: foo };
obj.foo(); // 1

// ES6 이전의 모든 함수는 일반 함수로서 호출할 수 있는 것은 물론 생성자 함수로서 호출할 수 있었다.

// ### 26.2 메서드
// ES6 사양에서 메서드는 메서드 축약 표현으로 정의된 함수만을 의미한다.
// ES6 메서드는 자신을 바인딩한 객체를 가리키는 내부 슬롯 [[HomeObject]]를 갖는다.

// ### 26.3 화살표 함수
// 함수를 더 간결하게 작성할 수 있는 문법적인 편의를 제공하는 JavaScript의 기능이다.

// 26.3.3 this 478p
class Prefixer {
    constructor(prefix) {
        this.prefix = prefix;
    }

    add(arr) {
        return arr.map(function (item) {
            return this.prefix + item;
        });
    }
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition', 'user-select']));

// 기대 값 : ["-webkit-transition", "-webkit-user-select"]
// 실제 값 : TypeError: Cannot read properties of undefined (reading 'prefix')

// 1. 메서드 내부에서 this를 사용하면 메서드를 호출한 객체를 가리킴. -> Prefixer 객체
// 2. map 메서드의 콜백 함수 내부에서 this를 사용하면 전역 객체를 가리킴. -> window
// 3. 하지만 this는 undefined를 가리킨다.
// 4. 왜냐하면, 클래스 내부의 모든 코드는 엄격 모드(strict mode)로 실행되고,
// 5. strict mode에서 함수를 일반 함수로서 호출하면 this에 undefined가 바인딩되기 때문이다.

// 이런 원하지 않는 결과값을 해결하기 위해 480p 까지 다양한 해결법이 존재. 그 중 하나가 화살표 함수를 사용하는 것.
// 화살표 함수는 함수 자체의 this 바인딩을 갖고 있지 않기 때문에 상위 스코프의 this를 그대로 참조한다.

const person = {
    name: 'Lee',
    sayHi: () => console.log(`Hi ${this.name}`)
};

person.sayHi(); // Hi

// 화살표 함수는 메서드로 사용하기에는 적합하지 않다.
// sayHi 메서드 내부의 this는 메서드를 소유한 객체, 즉 person 객체를 가리키지 않고 상위 스코프인 전역 객체를 가리키기 때문이다.
// super, arguments도 상위 스코프의 super, arguments를 가리킨다.


// 26.4 Rest 파라미터

function sum(num1, num2, num3) {
    return this;
}

console.log(sum(1, 2, 3)); // window


class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
}

const me = new Person('Ungmo', 'Lee');

