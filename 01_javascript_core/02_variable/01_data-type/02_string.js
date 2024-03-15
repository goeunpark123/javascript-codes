/* 
  02. 문자열(string) 타입
*/

var str = '안녕하세요';
console.log(typeof str);

/* 일반 문자열 내에서는 줄 바꿈 사용 불가 */
/*  
  var str2 = '안녕하세요.
  반갑습니다.';
*/
 
/* 백틱(`)을 사용하면 줄 바꿈 사용 가능하고 공백이 그대로 적용 */
 var str2 = `안녕하세요.
반갑습니다.`;
console.log('multiline: ', str2);

/* 문자열 이어붙이기 */
var lastName = '홍';
var firstName = '길동';
console.log(lastName + firstName);

/* 표현식 삽입(${})과 백틱을 함께 사용하면 가독성도 좋고 간편한 문자열 조합 가능 */
console.log(`${lastName}${firstName}`);