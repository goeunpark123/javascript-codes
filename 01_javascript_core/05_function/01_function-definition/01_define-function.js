/* function-declaration(함수 선언문) */
function hello(name) {
    return `${name}?`;
}

console.log(hello('홍길동'));

/* function-expression(함수 표현식) */

/*
  자바 스크립트 함수는 객체 타입의 값으로 갖는다. (일급 객체: 값의 성질을 갖는 객체)
  함수는 일급 객체이므로 함수 리터럴로 생성한 함수 객체를 변수에 할당할 수 있다.
*/

var hello2 = function (name) {
    return `${name}?`;
};

// var hello2 = function abc(name) {
//     return `${name}?`;
// };

console.log(hello2('강감찬'));
// console.log(abc('강감찬'));
