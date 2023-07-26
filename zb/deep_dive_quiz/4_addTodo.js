// todos 배열과 새로운 요소(예를 들어 `{ id: 4, content: 'Test', completed: false }`)를 인수로 전달하면 todos 배열의 선두에 새로운 요소를 추가해 todos 배열을 반환한다.

// - for 문, for…in 문, for…of 문, Array#forEach, Array#unshift는 사용하지 않는다.
// - todos 배열을 변경하지 않는다.

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

const addTodo = (todos, newTodo) => {
  return [newTodo, ...todos];
};

console.log(addTodo(todos, { id: 4, content: 'Test', completed: false }));
/*
  [
    { id: 4, content: 'Test', completed: false },
    { id: 3, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 1, content: 'Javascript', completed: false }
  ]
  */
