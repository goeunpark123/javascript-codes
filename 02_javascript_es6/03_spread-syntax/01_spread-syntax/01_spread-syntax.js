let arr = [10, 30, 20];
console.log(...arr);

console.log(`가장 큰 값: ${Math.max(...arr)}`);
console.log(`가장 큰 값: ${Math.max(10, 30, 20)}`);

let arr1 = [10, 30, 20];
let arr2 = [100, 300, 200];

// 하나의 배열로 결합(concat)
console.log([...arr1,...arr2]);
console.log([10, ...arr1, -1, ...arr2, 2]);

console.log(...arr1, ...arr2);
console.log(`가장 큰 값: ${Math.max(...arr1,...arr2)}`);

// 문자열의 경우
let str = 'Javascript';
console.log(...str);
console.log([...str]);
console.log(Array.from(str));
