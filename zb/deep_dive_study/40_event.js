// 40.1 이벤트 드리븐 프로그래밍
// 브라우저는 처리해야 할 특정 사건이 발생하면 이를 감지하여 이벤트를 발생시킨다. 이때 이벤트가 발생했을 때 호출될 함수를 이벤트 핸들러라 하고,
// 이벤트가 발생했을 때 브라우저에게 이벤트 핸들러 호출을 위임하는 것을 이벤트 핸들러 등록이라 한다.

// 브라우저는 사용자의 버튼 클릭을 감지하여 클릭 이벤트를 발생시킬 수 있다. 그리고 클릭 이벤트가 발생하면 특정함수를 호출하도록 브라우저에게 위임할 수 있다.
// 프로그램의 흐름을 이벤트 중심으로 제어하는 프로그래밍 방식을 이벤트 드리븐 프로그래밍이라 한다.

// 40.2 이벤트 타입
// 1. 마우스 이벤트
// 2. 키보드 이벤트
// 3. 포커스 이벤트
// 4. 폼 이벤트
// 기타 등등

// 40.3 이벤트 핸들러 등록
// 이벤트 핸들러는 이벤트가 발생했을 때 브라우저에 호출을 위임한 함수. 이벤트가 발생하면 브라우저에 의해 호출될 함수가 이벤트 핸들러다.
// 1. 어트리뷰트 방식
// HTML 요소의 어트리뷰트에는 이벤트 핸들러 어트뷰리트가 있다. 가급적 사용하지 말자.

// 2. 프로퍼티 방식
// 이벤트 핸들러 프로퍼티에 함수를 바인딩하면 이벤트 핸들러가 등록된다.
const $button = document.querySelector('button');

// 이벤트 핸들러 프로퍼티에 이벤트 핸들러를 바인딩한다.
$button.onclick = function () {
  // $button -> 이벤트 타깃, onclick -> 이벤트 타입, function () {} -> 이벤트 핸들러
  console.log('button clicked');
};

// 단, 이벤트 핸들러 프로퍼티에 하나의 이벤트 핸들러만 바인딩할 수 있다는 단점이 있다.

// 3. addEventListener 메서드
// 이벤트 타깃.addEventListener(이벤트 타입, 이벤트 핸들러[, 옵션]);
// addEventListener 메서드는 이벤트 핸들러 프로퍼티에 바인딩된 이벤트 핸들러에 영향을 주지 않는다. 따라서 버튼 요소에서 클릭이벤트가 발생하면
// 2개의 이벤트 모두 호출된다. 단, 참조가 동일한 이벤트 핸들러를 중복 등록할 수 없다.

// 40.4 이벤트 핸들러 제거
// addEventListener 메서드로 등록한 이벤트 핸들러는 removeEventListener 메서드로 제거할 수 있다. 인수는 addEventListener 메서드와 동일하게 전달한다. 하지만, 인수가 일치하지 않으면 제거되지 않는다.
// removeEventListener 메서드에 인수로 전달한 이벤트 핸들러는 addEventListener 메서드로 등록한 이벤트 핸들러와 동일한 함수 객체여야 한다. 따라서 무명 함수를 사용한 이벤트 핸들러는 제거할 수 없다.
// 무명함수에 대해 직접 접근하기 어렵기 때문. 제거하려면 addEventListener 메서드에 전달한 이벤트 핸들러를 변수에 할당하여 사용해야 한다.

$button.addEventListener('click', () => {
  console.log('button clicked');
});

$button.removeEventListener('click', () => {
  console.log('button clicked');
}); // 제거되지 않는다.

// 이벤트 핸들러 프로퍼티 방식으로 등록한 이벤트 핸들러는 removeEventListener 메서드로 제거할 수 없다. 이벤트 핸들러 프로퍼티 방식으로 등록한 이벤트 핸들러는 null을 할당하여 제거한다.

// 40.5 이벤트 객체
// 생성된 이벤트 객체는 이벤트 핸들러의 첫 번째 인수로 전달된다.

function showCoords(event) {
  $msg.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
}

document.onclick = showCoords;

// 이벤트 객체 : PointerEvent {isTrusted: true, pointerId: 0, width: 1, height: 1, pressure: 0, …}
// 클릭 이벤트 = document.onclick = showCoords; -> 클릭 이벤트가 발생하면 showCoords 함수가 호출된다.
// 이때 이벤트 객체가 showCoords 함수의 첫 번째 인수로 전달되고 파라미터 event에 할당된다.
// 함수 이름만을 쓰는 이유는 이벤트의 결과값을 내가 아직 모르기 때문에 브라우저에게 위임하는 것이다.
// 그래서 암묵적으로 함수 이름을 쓰는 것이다라고 이해했다.
