/* 표현식을 평가하는 도중 평가 결과가 확정된 경우 나머지 평가 과정을 생략 */

// 1. OR
console.log('apple' || 'banana');   // apple, true || true
console.log('' || 'banana');        // banana
console.log('apple' || false);      // apple

// 2. AND
console.log('apple' && 'banana');
console.log(false && 'banana');
console.log('apple' && false);

// 3. NOT
var num = 1;
if(num % 2 == 0) {
    console.log('짝수');
} else {
    console.log('홀수');
}

// 단축 평가를 활용하여 같은 결과를 얻을 수 있다.
num % 2 == 0 && console.log('짝수');    // true && 실행     &&는 왼쪽이 맞으면 오른쪽 실행
num % 2 == 0 || console.log('홀수');    // false || 실행    ||은 왼쪽이 틀리면 오른쪽 실행