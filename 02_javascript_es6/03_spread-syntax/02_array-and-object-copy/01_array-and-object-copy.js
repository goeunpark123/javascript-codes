// 1. 배열 복사
let arr = [10, 30, 20];
let arrCopy = [...arr];

console.log(arr);
console.log(arrCopy);
console.log(arr === arrCopy);

// 2. 객체 복사
let obj = { name: '홍길동', age: 20, addr: '서울시', hobby: ['축구', '농구']};
let objCopy = {...obj };            // copy

// 나머지 연산자 개념으로도 활용 가능
// let age = 30;
// let name = '강감찬';
// let objCopy = {...obj, age, name };

console.log(obj);
console.log(objCopy);
console.log(obj === objCopy);