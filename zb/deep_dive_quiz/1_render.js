// todos 배열을 인수로 전달받아 html 문자열을 생성해 반환한다.
// for 문, for…in 문, for…of 문은 사용하지 않는다.

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

const render = (todos) => {
  return todos.reduce((html, data) => {
    html += `
    <li id="${data.id}">
        <label><input type="checkbox" ${data.completed ? 'checked' : ''}>${data.content}</label>
    </li>`;
    return html;
  }, '');
};

console.log(render(todos));
/*
  <li id="3">
    <label><input type="checkbox">HTML</label>
  </li>
  <li id="2">
    <label><input type="checkbox" checked>CSS</label>
  </li>
  <li id="1">
    <label><input type="checkbox">Javascript</label>
  </li>
  */
