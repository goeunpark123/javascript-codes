/* 함수 선언문 */
function hello(name) {
    console.log(name);

    return `${name}?`;
}

var result = hello("홍길동");
console.log(result);

result = hello