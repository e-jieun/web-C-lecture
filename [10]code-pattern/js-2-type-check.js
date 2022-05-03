
/*

? 해당파일을 색깔로 구분하여 훈련하고자 하는 훈련생은
? 확장 플러그인에서 Better Comments <--를 검색할 것



* 자바스크립트의 모든 값은 다음 형식 중 하나이다.

? 숫자 number
? 문자열 string
? null
? undefined
? boolean
? object
????? array는 object 중 하나의 다른 종류 이다.
? symbol

TODO : 어떤 함수를 가져와 사용할 때, 그것이 어떤 값을 리턴하는지를 분명히 익혀둘 필요가 있다.

*/

function exampleOne(a, b) {
  let result = a + b;
  return "hello";
}

function exampleTwo(a, b) {
  let result = a + b;
  return 1;
}

function exampleThree(a, b) {
  let result = a + b;
  return true;
}

/*

? 세개의 함수 모두 동일한 연산을 하고 있는 점을 주목한다.
? 하지만 매우 중요한 차이점은 리턴하는 것이 다르다는 점이다.
* exampleOne()은 리턴'타입'이 문자열(string)이다.
* exampleTwo()는 리턴'타입'이 숫자(number)이다.
* exampleThree()는 리턴'타입'이 불리언(boolean)이다.

* 실행이 똑같아도 리턴타입이 다를 수 있는 점이 중요하다.
? 위의 예제는 알고리즘이 모두 보이는 상태이기 때문에 리턴을 한눈에 알 수 있지만,
? DOM API 메서드와 같은 '이미 만들어진, 혹은 만들어져 있는' 함수들은 알고리즘 전체를 확인하기 매우 불편하기 때문에
? 리턴 타입 체크를 하는 것이 작업진행에 가장 효율을 낼 수 있는 방법이다.

TODO: 메서드를 활용하는 방법

* 1. 만들어져 있는 메서드는 꼭 mdn의 표준 문서를 확인해야 한다.
* 2. 리턴값이 잘 나와있는 경우와 아닌 경우가 산재하기 때문에 타입체크 연산자를 활용해야 한다.
* 3. typeof 연산자는 다음과 같이 사용할 수 있다.

*/

let a = 1;
console.log( typeof a );
console.log( typeof(a) );

/*

? typeof operator
? 변수나 함수등등 "타입이 도출되는" 것이라면 무엇이든 체크 할 수 있다.
? 띄어쓰기를 쓰는 경우 '간단한'체크 정도의 의미이며
? 코딩스타일(코드컨벤션)에 따라 다르지만, 함수처럼 사용하는 것이 관례이다. -> '직관적으로 해당 값을 판별하여 사용하겠다.' 라는 의미가 암묵적인 관습
* () 소괄호는 연산 우선순위가 가장 높은 것도 이유 중 하나

*/




