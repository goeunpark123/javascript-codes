console.log(hello('...'));
console.log(hi('안녕'));

/* 함수 선언문(js 코드 상에서 먼저 해석, 익명함수는 불가) */
function hello(name) {
    return `${name}?`;
}

/* 함수 표현식 */
var hi = function (name) {
    return `${name}?`;
}

console.log(`함수 표현식 이후:  ${hi(name)}`);

/*
  함수 선언문은 런타임 이전 자바 스크립트 엔진에 의해 먼저 해석된다.
  따라서 함수 선언문 이전에 함수를 참조할 수 있으며 호출할 수도 있다.
  함수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바 스크립트
  고유의 특징을 '호이스팅'이라고 한다.
*/


