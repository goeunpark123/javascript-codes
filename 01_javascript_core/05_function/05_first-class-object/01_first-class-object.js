/*
  1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능
  2. 변수나 자료 구조(객체, 배열 등)에 저장 가능하다.
  3. 함수의 매개변수로 전달 가능하다.
  4. 함수의 반환값으로 사용 가능하다.
*/

/* 1번과 2번 만족 */
var hello = function() {
    return "안녕하세요";
};

/* 3번 만족 */
function repeat(func, count) {
    for (var i = 0; i < count; i++) {
        console.log(func());
    }

    /* 4번 만족 */
    return function() {
        console.log(`${count}번 반복 완료`);
    }
}

// var returnFunc = repeat(hello, 5);
// returnFunc();

repeat(hello, 5)();