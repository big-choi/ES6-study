// 일련의 과정을 거쳐 렌더링 엔진은 HTML 문서를 파싱하고 DOM을 생성한다.
// DOM은 HTML 문서의 계층적 구조와 정보를 표현하며 이를 제어할 수 있는 API를 제공한다.
// 프로퍼티와 메서드를 제공하는 트리 자료구조이다.

// ### 39.1 노드
// 노드는 트리 자료구조의 기본 구성 요소이다.

// 트리 자료구조
// 하나의 루트 노드에서 시작하여 나뭇가지 형태로 연결된 노드의 집합으로 계층적 관계를 표현한다.
// 치상위 노드를 루트 노드, 최하위 노드를 리프 노드라 한다.
// 이런 형태가 노드로 구성되어 있는 것을 DOM이라 한다. 그래서 DOM 트리라고도 한다.

// 모든 노드 객체는 Object, EventTarget, Node 인터페이스를 상속받는다.
// 문서 노드는 Document, HTMLDocument 인ㅌ페이스를 상속받고 어트리뷰트 노드는 Attr 인터페이스를 상속받는다.
// 요소 노드는 Element 인터페이스를 상속받고 추가적으로 태그의 종류별로 세분화된 인터페이스를 상속받는다.
// 프로토타입 체인 관점에서 살펴보면 input 요소 노드 객체는 HTMLElement, Element, Node, EventTarget, Object의 프로토타입 체인을 갖는다.


// ### 39.2 요소 노드 취득
// 1. id를 사용하여 요소 노드를 취득하는 방법

// Document.getElementById 메서드는 인수로 전달받은 id 어트리뷰트 값을 갖는 요소 노드를 탐색하여 반환한다.
// getElementById 메서드는 Document.prototype의 프로퍼티이므로 document 객체를 통해 호출한다.

// id 값이 banana인 요소 노드를 탐색하여 반환한다.
const $elem = document.getElementById('banana');

// 취득한 요소 노드의 style.color 프로퍼티 값을 변경한다.
$elem.style.color = 'red';

// HTML 문서내에 id 값이 여러 개 존재하더라도 에러가 발생하지 않는다. 이런 경우 첫 번째 요소 노드만 반환한다.
// 만약 인수로 전달된 id 어트리뷰트 값을 갖는 요소 노드가 존재하지 않으면 null을 반환한다.
// HTML 요소에 id 어트리뷰트를 부여하면 id 값과 동일한 이름의 전역 변수가 암묵적으로 생성된다.

// 2. 태그 이름을 사용하여 요소 노드를 취득하는 방법
// Document.getElementsByTagName 메서드는 인수로 전달받은 태그 이름을 갖는 요소 노드를 탐색하여 HTMLCollection 객체를 반환한다.
// HTMLCollection 객체는 유사 배열 객체이자 이터러블이며, length 프로퍼티와 item 메서드를 갖는다.
// HTMLCollection 객체는 라이브 상태이므로 DOM이 변경되면 자동으로 갱신된다.

// 3. 클래스 이름을 사용하여 요소 노드를 취득하는 방법
// Document.getElementsByClassName 메서드는 인수로 전달받은 클래스 이름을 갖는 요소 노드를 탐색하여 getElementByTagName 메서드와 마찬가지로 HTMLCollection 객체를 반환한다.
// 만약 인수로 전달된 class 값을 갖는 요소가 존재하지 않을 경우 빈 HTMLCollection 객체를 반환한다.

// 4. CSS 선택자를 사용하여 요소 노드를 취득하는 방법
// 생략

// 5. 특정 요소 노드를 취득할 수 있는지 확인
// Document.querySelector 메서드는 인수로 전달받은 CSS 선택자를 사용하여 특정 요소 노드를 탐색하여 반환한다.
// Element.prototype.matches 메서드는 인수로 전달받은 CSS 선택자를 사용하여 특정 요소 노드를 탐색하여 취득할 수 있는지 확인한다.

const $apple = document.querySelector('.apple');

console.log($apple.matches('.apple')); // true
console.log($apple.matches('.banana')); // false

// Element.prototype.matches 메서드는 이벤트 위임을 사용할 때 유용하다.


// ### 39.3 노드 탐색
// 요소 노드를 취득한 다음, DOM 트리를 탐색하여 자식, 부모, 형제 노드를 취득할 수 있다.

// 1. 공백 텍스트 노드
// HTML 요소 사이의 공백 문자(스페이스, 탭, 개행 등)는 브라우저에 의해 공백 텍스트 노드로 변환된다.

// 2. 자식 노드 탐색
// 사진

// 3. 자식 노드 존재 확인
// Node.prototype.hasChildNodes 메서드는 자식 노드가 존재하면 true, 그렇지 않으면 false를 반환한다.

// 4. 요소 노드의 텍스트 노드 탐색
// 요소 노드는 자식 노드로 텍스트 노드를 가질 수 있다. 이때 텍스트 노드는 요소 노드의 첫 번째 자식 노드이다.
// Node.prototype.firstChild 메서드는 요소 노드의 첫 번째 자식 노드를 탐색하여 반환한다.

// 5. 부모 노드 탐색
// Node.prototype.parentNode 메서드는 부모 노드를 탐색하여 반환한다.

// 6. 형제 노드 탐색
// Node.prototype.nextSibling 메서드는 형제 노드 중 다음 형제 노드를 탐색하여 반환한다.
// Node.prototype.previousSibling 메서드는 형제 노드 중 이전 형제 노드를 탐색하여 반환한다.

// ### 39.4 노드 정보 취득
// Node.prototype.nodeType 프로퍼티는 노드의 타입을 나타내는 정수 값을 반환한다.
// Node.prototype.nodeName 프로퍼티는 노드의 이름을 나타내는 문자열을 반환한다.
// 요소 노드의 경우 태그 이름을 대문자로 반환한다.
// 텍스트 노드의 경우 #text를 반환한다.
// 문서 노드는 #document를 반환한다.

// ### 39.5 노드 요소의 텍스트 조작
// 1. nodeValue
// nodeValue 프로퍼티는 getter와 setter 함수를 갖는 데이터 프로퍼티이다. 따라서 참조와 할당 모두 가능하다.
// 노드 객체의 값을 반환하고, 노드 객체의 값이란 텍스트 노드의 텍스트다. 문서 노드나 요소 노드의 경우 null을 반환한다.

<div id="foo">Hello</div>

// 문서(document) 노드의 nodeValue 프로퍼티는 null을 반환한다.
console.log(document.nodeValue);  // null

// 요소 노드의 nodeValue 프로퍼티는 null을 반환한다.
console.log(document.getElementById('foo').nodeValue); // null

// 텍스트 노드의 nodeValue 프로퍼티는 텍스트를 반환한다.
console.log(document.getElementById('foo').firstChild.nodeValue); // Hello

// 2. textContent
// nodeValue 와 마찬가지로 getter와 setter 함수를 갖는 데이터 프로퍼티이다. 요소 노드의 텍스트와 모든 자손 노드의 텍스트를 모두 취득하거나 변경할 수 있다.
// nodeValue는 텍스트 노드의 텍스트만 취득하거나 변경할 수 있지만 textContent는 요소 노드의 텍스트와 모든 자손 노드의 텍스트를 모두 취득하거나 변경할 수 있다.
// 비슷한 프로퍼티로 innerText가 있다. 눈에 보이는 텍스트만 취득하거나 변경할 수 있기 때문에 css 처리 과정이 들어가며 리플로우가 발생한다.
// 옛날에는 innerText가 비표준이었다고 한다.


// ### 39.6 DOM 조작
// 새로운 노드를 생성하여 DOM에 추가하거나 기존 노드를 제거하거나 교체하는 등의 DOM을 조작하는 것.
// DOM 조작에 의해 새로운 노드가 추가되거나 삭제되면 리플로우와 리페인트가 발생한다. 이는 성능에 영향을 주므로 주의해야 한다.

// innerHTML
// innerHTML 프로퍼티는 HTML 문자열을 파싱하여 DOM을 생성하고 기존의 DOM을 제거한 후 새로운 DOM을 삽입한다.
// textContent 프로퍼티를 참조하면 텍스트만 취득할 수 있지만 innerHTML 프로퍼티를 참조하면 HTML 마크업이 포함된 문자열을 취득할 수 있다.
// 사용법이 간단하고 편리하지만 DOM 비용을 많이 잡아먹고, 요소 앞에 추가하거나 하는 등의 세밀한 조작이 불가능한 느낌.
// 프로세스 : 문자열 파싱 -> new DOM 생성 -> 기존 DOM 제거 -> new DOM 삽입

// insertAdjacentHTML (어제이슨트)
// insertAdjacentHTML 기존 요소를 제거하지 않고도 지정한 위치에 새로운 요소를 삽입할 수 있다.
// 프로세스 : new DOM 생성 -> new DOM 삽입

// 노드 생성과 추가
// 1. createElement
// 2. createTextNode
// 3. appendChild

// ### 39.7 어트리뷰트
// HTML 요소는 여러 개의 어트리뷰트를 가질 수 있다. 어트리뷰트는 HTML 요소의 부가 정보를 제공한다.
// getAttribute, setAttribute 메서드는 요소 노드에서 직접 HTML 어트리뷰트 값을 취득하거나 변경할 수 있어서 편리하다.

// HTML 어트리뷰트 vs DOM 프로퍼티
// 요소 노드 객체에는 HTML 어트리뷰트에 대응하는 DOM 프로퍼티가 존재한다. 이 DOM 프로퍼티들은 HTML 어트리뷰트의 값을 초기값으로 가지고 있다.
// DOM 프로퍼티는 HTML 어트리뷰트의 값을 변경하면 DOM 프로퍼티의 값도 자동으로 변경된다. 예를들어 input 요소에 value 어트리뷰트를 변경하면 value 프로퍼티의 값도 자동으로 변경된다.

// 그러면 HTML 어트리뷰트와 DOM 프로퍼티가 동시에 관리되고 있는 것 처럼 보이지만 사실은 그렇지 않다.
// HTML 어트리뷰트의 역할은 변하지 않는 초기값을 제공하는 것이고, DOM 프로퍼티의 역할은 HTML 어트리뷰트의 값을 반영하는 것이다.
// 첫 렌더링 이후 HTML 어트리뷰트의 값은 DOM 프로퍼티에 의해 더 이상 참조되지 않는다.
// 요소 노드는 2개의 상태를 갖는다. 초기 상태와 최신 상태. 초기 상태는 HTML 어트리뷰트의 값이고, 최신 상태는 DOM 프로퍼티의 값이다.


// 39.8 스타일
// style 프로퍼티는 인라인 스타일을 취득하거나 변경할 수 있다.
// CSS 프로퍼티는 케밥 케이스를 따른다. CSS 프로퍼티 background-color는 style 프로퍼티의 backgroundColor로 변경해야 한다.