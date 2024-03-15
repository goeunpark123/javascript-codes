/* 
  04. undefined 타입 -> 원시 타입(primitive type)
*/

/*
  var 키워드로 선언한 변수는 암묵적으로 undefined로 초기화
  
  var undef = undefined;
  변수를 선언한 이후 값을 할당하지 않게 되면 undefined로 초기화
  의도적으로 변수에 undefined를 할당하면 본래 취지와 어긋나고 혼란을 줄 수 있으므로 지양
*/

var undef;
console.log(typeof undef);

/*
  05. null 타입
*/

/* 변수에 값이 없다는 것을 의도적으로 명시 */

var nullVar = 'something';
nullVar = null;     // 이전 참조를 제거하여 더 이상 'something'을 참조하지 X
console.log(nullVar);
console.log(typeof nullVar);