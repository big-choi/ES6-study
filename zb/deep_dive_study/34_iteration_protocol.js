// ES6에서 도입된 이터레이션 프로토콜은 순회 가능한 객체를 만들기 위한 규약이다.
// 이전에는 배열, 문자열 등은 각자 나름의 방식으로 순회(for문, for...in문, forEach 메서드 등)했지만
// ES6에서는 순회 가능한 데이터 컬렉션을 프로토콜을 준수하는 객체로 통일하여 for...of, 스프레드 문법, 배열 디스트럭쳐링 할당의 대상으로 일원화했다.


// 이터레이션 프로토콜은 덕 타이핑을 통해 구현된다.
// 덕 타이핑 : 사람이 오리처럼 행동하고 오리처럼 생겼으면 오리다. 실제 타입은 상관없고 구현된 메서드가 같으면 같은 타입으로 간주한다.
// 즉, 객체의 구조가 프로토콜을 충족하면 이터러블로 간주한다.

// 프로토콜을 충족하려면 객체의 프로퍼티에 Symbol.iterator가 있어야 하고, 이것은 이터레이터를 반환하는 함수여야 한다.
// 이터레이터는 next 메서드를 갖는다. next 메서드는 다시 value와 done 프로퍼티를 갖는 객체를 반환한다.
// 이터레이션 프로토콜은 이터러블 프로토콜, 이터레이터 프로토콜로 구성된다.

// 이터러블인지 확인하는 함수 (615p)
const isIterable = v => v !== null && typeof v[Symbol.iterator] === 'function';

console.log(isIterable([])); // true
console.log(isIterable('')); // true
console.log(isIterable(new Map())); // true
console.log(isIterable(new Set())); // true
console.log(isIterable({})); // false

const obj = { a: 1, b: 2 };

console.log(Symbol.iterator in obj); // false

// 이터러블이 아닌 객체는 for...of 문에서 순회할 수 없다.
for (const p of obj) {
  console.log(p);
}


// 단, 일반 객체에 스프레드 문법을 사용할 수 있도록 허용한다.

// 느낀 점
// 프로젝트 중에 for...in 문을 사용한 부분이 있었는데, 이 부분을 for...of 문으로 바꾸니까 값이 제대로 나오지 않았다.
// 이유를 찾으려고 에전에 검색했던 내용을 다시 찾아보았는데, 그 때 당시에는 이터러블에 대한 개념이 없어서 이해하지 못했었다.
// 이번에 이터러블에 대해 공부하고 나니까 이해가 되었다.
// for...in 문은 객체의 프로퍼티를 순회하지만 for...of 문은 이터러블을 순회하기 때문에 값이 제대로 나오지 않았던 것으로 이해된다.

