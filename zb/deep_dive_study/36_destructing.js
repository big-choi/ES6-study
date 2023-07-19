const arr = [1, 2, 3];

// ES6 배열 디스트럭처링 할당
// 변수 one, two, three를 선언하고 배열 arr을 디스트럭처링하여 할당한다.
// 이때 할당 기준은 배열의 인덱스다.
const [one, two, three] = arr;
console.log(one, two, three); // 1 2 3

// 배열 디스트럭처링 할당을 위해서는 할당 연산자 왼쪽에 배열 형태의 변수를 선언해야 한다. 이때 변수를 배열 리터럴 형태로 선언한다.

const [x, y] = [1, 2];

// 우변에 이터러블을 할당하지 않으면 에러가 발생한다.

// 36.2 객체 디스트럭처링 할당

// 배열의 요소가 객체인 경우 디스트럭처링 할당과 객체 디스트럭처링 할당을 혼용할 수 있다.
const todos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: false },
  { id: 3, content: 'Javascript', completed: true },
];

// todos 배열의 첫 번째 요소인 객체로부터 id 프로퍼티만 추출한다.
const [, { id }] = todos;
console.log(id); // 2
