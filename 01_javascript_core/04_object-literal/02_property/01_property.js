/* 객체는 프로퍼티의 집합이며, 프로퍼티는 키와 값으로 구성 */

var obj = {
    normal: 'normal value',
    '@ s p a c e @': 'space value',     // 띄어쓰기나 특수 기호(_, $ 제외)를 작은 따옴ㅇ표로 프로퍼티명 지정
    '': '',                             // 가능하지만 권장하지 X
    0: 1,                               // 숫자인 프로퍼티 키는 내부적으로 문자열로 변환
    var: 'var',                         // 예약어 키는 오류 발생하지 않지만 권장 X
    normal: 'new value',                // 이미 존재하는 키를 중복 선언하면 나중에 선언한 프로퍼티가 기존 프로퍼티를 덮어쓴다.
}

obj['test'] = 'test value';
obj.test = 'test value';

var key = 'test';
obj[key] = 'test value';

console.log(obj.test);
console.log(obj.normal);
