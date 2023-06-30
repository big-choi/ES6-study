// 원시 타입의 값은 변경 불가능한 값이다.
// 객체 타입의 값은 변경 가능한 값이다.
// 원시 값을 변수에 할당하면 변수에는 실제 값이 저장되지만, 객체를 변수에 할당하면 참조 값이 저장된다.

// 11.1 원시 값
// 원시 값은 변경 불가능한 값이다. 변수와 값을 구분해서 생각해야되는데, "변경 불가능한 값"은 원시 값 자체를 변경할 수 없다는 것이지 변수 값을 변경할 수 없다라는 것이 아니다. 변수는 언제든지 재할당을 통해 변수 값을 변경할 수 있기 때문. (상수는 제외)

// 원시 값을 할당한 변수에 값을 재할당하면 새로운 메모리 공간을 확보한다. 원시 값이 변경가능했으면 기존 메모리 공간에 덮어쓰면 그만인데.
// 불변성을 갖는 원시 값을 할당한 변수는 재할당 이외에 변수 값을 변경할 수 있는 방법이 없다. 그래서 원시 값을 할당한 변수의 값을 변경하려면 재할당만 가능하다.

// 11.2 객체
// 프로퍼티 개수에 제한이 없으며 동적으로 추가/삭제가 가능하다. 그러므로 원시 값과 같이 메모리 공간의 크기를 사전에 정할 수 없다.

// 객체 타입의 값은 변경 가능한 값이라고 했다. 객체를 할당한 변수가 메모리 공간에 접근하면 참조 값에 접근한다.(= 객체가 저장된 메모리 공간의 주소 그 자체)



// 객체를 할당한 변수는 재할당 없이 객체를 직접 변경할 수 있다.