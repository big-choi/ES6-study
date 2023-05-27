var a = 10;
var b = 20;
var c = 30;
var d = 40;
export var d = 40; // -> export는 여러번 사용 가능
export { a, b, c };
export default d; // -> export default는 한번만 사용 가능