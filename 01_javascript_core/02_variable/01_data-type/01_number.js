/*
  자바 스크립트(ES6)에서 제공하는 7개의 데이터 타입
  (number, string, boolean, undefined, null, symbol, object 제공)
*/

/* 
  01. 숫자(number) 타입
  정수, 실수, 음수 (내부적으로는 실수로만 인식)
*/
var integer = 10;
var double = 5.5;
var negative = -10;

console.log(typeof integer);
console.log(typeof double);
console.log(typeof negative);

console.log(10 / 4);

/*
  숫자 타입은 추가적으로 세 가지 특별한 값 표현 가능
    Infinity: 양의 무한대
    -Infinity: 음의 무한대
    NaN: 산술 연산 불가(Not a Number)
*/

console.log(10 / 0);
console.log(10 / -0);
console.log(1 * '문자열');      // 문자열은 작은 따옴표('), 큰 따옴표(") 모두 가능