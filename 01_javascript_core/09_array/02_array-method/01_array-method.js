// 배열 메소드

const foodList = ['1', '2', '3', '4', '1'];

/* indexOf */
console.log(`fooddList.indexOf('1') :  ${foodList.indexOf('1')}`);      // 0
console.log(`fooddList.indexOf('5') :  ${foodList.indexOf('5')}`);      // -1

/* includes */
console.log(`fooddList.includes('1') :  ${foodList.includes('1')}`);    // true
console.log(`fooddList.includes('5') :  ${foodList.includes('5')}`);    // false

const foodList2 = ['5', '6', '7', '8', '5'];

/* push */
foodList2.push('9');
foodList2.push('0');

console.log(foodList2);

/* pop */
foodList2.pop();

const foodList3 = ['10', '11', '12', '13', '14'];

/* unshift: 배열 맨 앞에 추가 */
console.log(`foodList3.unshift(): ${foodList3.unshift('9')}`);
console.log(`foodList3.unshift(): ${foodList3.unshift('8')}`);

console.log(foodList3);

/* shift: 배열 맨 앞에서 제거 */
console.log(`foodList3.shift(): ${foodList3.shift()}`);

console.log(foodList3);

/* concat:  두 개 이상의 배열을 결합하여 새로운 배열을 반환(결합 순서의 유의미)*/
const arr1 = ['11', '12', '13'];
const arr2 = ['21', '22', '23'];
const arr3 = ['31', '32', '33'];

console.log(`arr1에 arr3 배열 concat: ${arr1.concat(arr3)}`);
// console.log(`arr2에 arr3 배열 concat: ${[...arr2, ...arr3]}`);
console.log(`arr3에 arr1, arr2 배열 concat: ${arr3.concat(arr1, arr2)}`);

/* slice: 배열의 요소 선택 잘라내기 */
/* splice: 배열의 index 위치의 요소 제거 및 추가 */
const front = ['html', 'css', 'javascript'];

console.log(`front.slice(1, 3): ${front.slice(1, 3)}`);     // CSS, JavaScript
console.log(`front : ${front}`);                            // 원본은 변경 X

/* splice(인덱스, 추가할 길이, 추가할 값1, 추가할 값2, ...) */
console.log(`front.splice(3, 1, "JDBC"): ${front.splice(3, 1, "JDBC")}`);
console.log(`front : ${front}`);

/* join: 배열을 우리가 원하는 구분자와 함께 결합하여 문자열로 반환 */
const snackList = ['사탕', '초콜렛', '껌', '마이쮸'];

console.log(`${snackList}`);
console.log(`snackList.join(): ${snackList.join()}`);
console.log(`snackList.join('/'): ${snackList.join('/')}`);
