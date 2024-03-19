/* 자바 스크립트의 함수는 객체, 함수는 값으로 취급할 수 있고 프로퍼티 값으로 사용할 수도 있다. */

var name = '달마시안';

var dog = {
    name: 'Dog',
    eat: function (food) {
        console.log(`${name} ate ${food}`);                     // 'this.' 없이는 전역 변수 사용
        console.log(`${this.name} ate ${food}`);                // 메소드에서 'this'는 메소드를 호출한 객체

        return 'eat';
    }
};

console.log(dog.eat('고구마'));