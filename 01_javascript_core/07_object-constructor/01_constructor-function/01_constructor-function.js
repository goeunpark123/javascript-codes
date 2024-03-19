// 1. 객체 리터럴 방식
const student1 = {
    name: '홍길동',
    age: 20,
    getInfo: function() {
        return `${this.name}:  ${this.age}세`;
    }
}

const student2 = {
    name: '홍길은',
    age: 18,
    getInfo: function() {
        return `${this.name}:  ${this.age}세`;
    }
}

function Student(name, age) {
    this.name = name;
    this.age = age;
    this.getInfo = function() {
        return `${this.name}:  ${this.age}세`;
    }
}

const student3 = new Student('홍길금', 30);
const student4 = new Student('장보고', 40);

console.log(student3.getInfo());

//객체 리터럴 방식으로 수백명의 학생 

// 2. 생성자 함수 방식
/*
  객체를 생성하기 위한 프로퍼티들을 하나의 템플릿 개념으로 생성자 함수로써 작성하면
  동일한 프로퍼티를 가지는 여러 객체들을 쉽게 생성해낼 수 있다.
*/