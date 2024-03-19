/*
  자바 스크립트는 객체 기반 프로그래밍 언어로 원시 값을 제외한 나머지(함수, 배열, 정규 표현식 등)는 객체
*/

var student = {

    // 키: 값의 쌍으로 구성된 프로퍼티(속성)
    name: '홍길동',
    age: 20,

    // 메소드: 프로퍼티(상태 데이터)를 참조하고 조작할 수 있는 동작(behavior)
    getInfo: function () {
        return `${this.name}(은)는 ${this.age}이다.`
    }
};  // 리터럴 객체의 중괄호는 코드 블록(if나 for문의 중괄호)과는 다르다.(세미 콜론)

console.log(student)
console.log(typeof student);

console.log(student.getInfo());
console.log(student.getInfo());

student.name = '홍길동2';
console.log(student.getInfo());