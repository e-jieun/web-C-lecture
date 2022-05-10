
// * 선언 ( declaration)
function typeA() {

}
// * 전역 스코프 (global)
typeA();
// * 기명(이름이 있는) 선언방식


// * 익명함수(anonymous function) / 함수 리터럴(literal) : 직접 새긴다
// * 함수표현식(function expression)
const typeB = function() {

}
// * 제작자는 알지만 외부사람은 모르는 방식 : 권장되는 방식
typeB();


// * arrow function (화살표 함수)
// * 함수표현식과 같은 기능
// * 축약형(개발자들이 귀찮다고)
// * 특정 작동 때문에 -> 최신문법

const typeC = () => {}
const typeE = a => {} // * 매개변수가 하나일때는 소괄호도 안써도 돼 

const typeD = function () {}


(function() {})();
// * 선언이고 호출이고 모르겠고,
// * 즉시 실행하겠다. 
// * 즉시 실행함수

// * 문서시작할때 -> 즉시시작함수


let test;
test.addEventListener("type", function() {});
// * 함수 의 매개변수 자리에 함수가 들어가 있는 것 "콜백함수" 
// * 콜백함수는 익명이 기본이다.
// * 매우많이 사용하기 때문에 눈에 익혀야된다.

test.addEventListener('test', testFunction); //* function() <-소괄호를 사용하지 않는다 라는 특징이 있다.

function testFunction() {
  // * 밖으로 빼낸 콜백함수
  // * 기명으로 함수를 만들어줌
}















