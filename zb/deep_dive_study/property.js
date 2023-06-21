// const person = {
//     name: 'Lee',
// }

// console.log(Object.getOwnPropertyDescriptor(person, 'age'));


const person = {
    name: 'Lee',
    age: 20,
    nationality: 'Korea',
}

// console.log(Object.getOwnPropertyDescriptors(person));
console.log(Object.keys(person));

const person2 = {
    firstName: 'Ungmo',
    lastName: 'Lee',

    // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
    // getter 함수
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name) {
        // 배열 디스트럭처링 할당: " "을 기준으로 분리한 후 각 요소를 firstName, lastName에 할당한다.
        [this.firstName, this.lastName] = name.split(' ');
    }
}

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person2.firstName + ' ' + person2.lastName);

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
person2.fullName = 'Heegun Lee';
console.log(person2.fullName); // Heegun Lee


const person3 = {};

Object.defineProperties(person3, 'firstName', {
    value: 'Ungmo',
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperties(person3, 'lastName', {
    value: 'Lee',
    writable: true,
    enumerable: true,
    configurable: true,
});