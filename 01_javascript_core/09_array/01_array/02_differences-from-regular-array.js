// 일반적인 배열과의 차이점

const arr = [
    '홍길동',
    20,
    true,
    null,
    undefined,
    [],
    {},
    function() {}
];

console.log(arr);

/* 
  writerable - true면 값 수정 가능, false면 읽기만 가능
  enumerable - true면 반복문을 사용해 나열 가능, false면 반복문 사용 시 포함 X
  configurable - true면 프로퍼티 삭제 가능, false면 삭제 불가
*/ 

console.log(Object.getOwnPropertyDescriptor([1, 2, 3]));

