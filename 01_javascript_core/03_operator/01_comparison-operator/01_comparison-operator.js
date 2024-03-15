/* 기본적인 연산자는 java와 다르지 않다.(추가적이거나 다른 부분만 다룰 예정) */

/* 동등/동일(일치) 비교 연산자*/

/* 1. 숫자 1, 문자 '1',  */
console.log(`1 == 1: ${1 ==1}`);
console.log(`1 == true: ${1 == true}`);
console.log(`1 == '1': ${1 == '1'}`);
console.log(`1 === 1: ${1 ==='1'}`);        // 자료형까지 일치(동일) 비교: '==='.
console.log(`0 == false: ${0 == 'false'}`);

console.log(`0 == false: ${0 == 'false'}`);
console.log(`0 === false: ${0 === 'false'}`);

/* 2. NaN은 자신과 일치하지 않는 유일한 값 */
console.log(`NaN == NaN: ${NaN == NaN}`);
console.log(`NaN === NaN: ${NaN === NaN}`);

/* NaN인지 판별하기 위해서는 Number에서 제공하는 isNaN 함수를 활용 */
console.log(`Number.isNaN(NaN): ${Number.isNaN(NaN)}`);

/* 3. 일치하지 않는 값 비교 */
console.log(`1 != '1': ${1!= '1'}`);        // false
console.log(`1 !== '1': ${1 != '1'}`);      // true