
let current = 0;

let timer = setInterval(function() {
  /*

  ? setInterval() function 설명
  * setInterval()은 자바스크립트 언어 자체가 지원하는 코어 내장함수 중에 하나이다.
  * 일정한 간격 주기로 무언가를 실행시키고 싶을때 사용하며
  * 자동화의 주요 함수로 활용된다.
  * 
  * setInterval(첫번째 인자로 콜백함수, 두번째인자로 실행주기) 구조를 가지고 있다.
  * setInterval(callback function, delay) 라고 표현 하기도 한다.
  * 
  * 함수를 뜻하는 이름은 있지만, 이를 식별하는 이름은 없다. 이러한 함수를 이름이 없다고하여
  * 익명함수(anonymous function) 라고 부른다.
  * 익명이기때문에 별도로 제어하기 위해서 '식별' 하는 작업이 필요하고 이를 함께 사용하는 경우
  *
  * const example = setInterval(); 과 같이 변수 선언과 동시에 함수를 대입시키는 코딩 스타일이 존재한다.
  * 이를 함수 리터럴(function literal) 이라고 부르며 매우 중요한 패턴중 하나이다.

  * 함수 리터럴의 특징(※ 식별은 하기 때문에 제작자가 사용하기에는 문제가 없지만 보안상으로는 해당함수를 찾기 어렵다.)
  * 함수 표현식 (function expression) 이라고 부르기도 하며 약간의 명시적인 차이가 있지만
  * 함수 표현식(function expression) 과 함수 리터럴 (function literal)을 같은 의미로 보아도 좋다.
  * 
  * 보통 setInterval() 함수를 제어하기 위해서 핸들링용 변수를 지정해주는 편이며,
  * 변수를 활용해 '정지', '변화', 기타 등등을 if() 문과 함께 활용하여 제어하는 것이 일반적인 패턴이다.

  */
  
  console.log(current);
  current++;
  if(current === 60) {
    console.log('1분이 경과되었습니다.');
    clearInterval(timer);
  }
}, 1000);

