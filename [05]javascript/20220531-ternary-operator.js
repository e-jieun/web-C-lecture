let a = 1;
let b = 2;
let c = 1;

function one(a, b) {
  if(a === b) {
    return `${a}와 ${b}는 값이 같습니다.`;
  } else {
    return `${a}와 ${b}는 값이 다릅니다.`;
  }
};
console.log(one(a,b));
console.log(one(a,c));
/* 
? 일반적인 if문 형식
* 절차적으로(명령방식)으로 참일경우와 아닐 경우를 {} 중괄호 스코프를 통해 작성되었기 때문에
* 중요한 제어나 기타 등등 '읽혀야만' 할 때 주로 사용된다.
*/

function two(a, b) {
  let result = a === b ? "값이 같습니다." : "값이 다릅니다.";
  return result;
}
console.log(two(a,c));
/*
  ? 조건식을 통해 실행될 값을 변수에 대입 하는 방식
  * 모양새로는 매우 이상하게 보이는 방식이지만, '값을 따로 구해놓고 저장해야될 때(원시값개념필요)' 지역변수에 대입시키는 방식을 사용한다.
  * a === b ? 라는 표현은 위의 one() 함수의 if(a === b) 과 같은 역할을 한다.
*/
function three(a, b) {
  return a === b ? "값이 같습니다." : "값이 다릅니다.";
}
console.log(three(a, b));
/*
  ? return 구문에 바로 조건식을 다는 형식
  * 함수 자체가 어떤 판단결과값으로 간편하게 사용해야할 때 위와 같이 활용하며 매우 자주 확인할 수 있다.
*/

