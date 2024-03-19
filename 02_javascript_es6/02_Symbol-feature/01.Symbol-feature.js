// 심볼 특징
let student = {
    name: '홍길동'
};

let id = Symbol("id");
student[id] = 1;

console.log(student);

console.log(Object.keys(student));
console.log(Object.getOwnPropertyNames(student));

for(let key in student) {
    console.log(key);
}

/*
  기존에 작성된 코드에 영향을 주지 않고 새로운 프로퍼티를 추가하기 위해, 즉 하위 호환성을 보장하기 위해 도입되었다고 할 수 있다.
*/