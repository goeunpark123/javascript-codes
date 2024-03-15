/* 03. 논리 타입으로 변환 */

console.log("==== 논리 타입으로 변환 ====");

/*
  자바 스크립트 엔진은 불린 타입이 아닌 값을 Truthy(참으로 판단) 또는 Falsy(거짓으로 판단)으로 구분
  Truthy -> true, Falsy -> false로 암묵적 타입 변환
*/

if(true) console.log('if(true)');                       // truthy
if(false) console.log('if(false)');      
if(undefined) console.log('if(undefined)');
if(null) console.log('if(null)');
if(0) console.log('if(0)');
if(NaN) console.log('if(NaN)');
if('') console.log("if('')");
if('JavaScript') console.log("if('JavaScript')");       // truthy
