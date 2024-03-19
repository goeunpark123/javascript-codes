var dog = {
    name: 'Dog',
    eat: function (food) {
        console.log(`${this.name} ate ${food}`);
    }
};

/* 1. 마침표 표기법(dot notation) */
console.log(dog.name);
dog.eat('고구마');

/* 2. 대괄호 표기법(square braket notation) */
console.log(dog['name']);
dog['eat']('고구마');

/* 대괄호 표기법만 가능한 경우 */
var obj = {
    'dash-key': 'dash-value',
    0: 1
}

// 프로퍼티 키가 식별자 네이밍 규칙을 준수하지 않은 이름인 경우 !반드시 대괄호 표기법을 사용(작은 따옴표 필수)!
// console.log(obj.dash-key);
// console.log(obj.'dash-key');
// console.log(obj[dash-key]);
console.log(obj['dash-key']);

// 프로퍼티 키가 숫자로 이루어진 경우 작은 따옴표를 생략한 대괄호 표기법도 가능
// console.log(obj.0);
// console.log(obj.'0');
console.log(obj[0]);
console.log(obj['0']);