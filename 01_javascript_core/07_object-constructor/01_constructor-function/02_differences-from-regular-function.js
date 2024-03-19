function Student(name, age) {
    this.name = name;
    this.age = age;
    this.getInfo = function() {
        return `${this.name}:  ${this.age}세`;
    }
}

const student = Student('강감찬', 35);
console.log(student.getInfo());

/*
  일반 함수와 생성자 함수의 특별한 형식적 차이는 없다.
  (첫 문자를 대문자로 기술하려 구별하는 노력 정도)
  new 연산자 없이 호출하면 일반 함수로 동작
*/

function Dog(name, age) {
    console.log('new.target: ', new.target);
    if(!new.target) {               // new 없이 함수 호출 시 true가 되게 하는 구문
        return new Dog(name, age)   // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스 반환
    }

    this.name = name;
    this.age = age;
}

const dog = Dog('뽀삐', 3);
console.log(dog);

// 제공되는 빌트인 함수들: Object, Stringm Number, Boolean, Date, Regex, ...