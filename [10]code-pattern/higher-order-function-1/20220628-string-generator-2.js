/*
? 문장만들기 애플리케이션
* 포켓몬스터 게임에서 자주 등장하는 '만들어진' 문장을 자바스크립트로 구현하기

* 한국어의 문장 어휘 분석
? 주어 + 목적어 + 동사
* 일반적인 문장의 구조를 파악하면서 알고리즘을 짜는 힌트를 얻었다.
work .1 랜덤으로 문장이 만들어지는 애플리케이션
pseudo .1 문장의 소스가 될 데이터가 필요하다.
pseudo .2 랜덤으로 소스의 각부분마다 요소를 짚을 수 있는 알고리즘이 필요하다.
pseudo .3 한국어 받침을 구분할 기준이 필요하다.
pseudo .4 하나의 문장(string)으로 만들어지는 동작이 필요하다.


*/
const subject = ["피카츄", "라이츄", "파이리", "꼬부기", "버터풀", "야도란", "피존투", "또가스"];
const directObject = ["사과나무", "텀블러", "단무지", "커피", "연필", "에디터"];
const verb = ["먹었다", "마셨다", "놀았다", "졸았다", "잡았다", "좋아한다", "싫어한다", "애정한다", "놓쳤다", "흘렸다"];
// ? 변수 세개 : 주어, 목적어, 동사에 해당하는 데이터를 예시로 간단히 만들었다.
/*
  * 실무에서의 상황이라면 JSON , DB 데이터와 같은 방대한 양의 축적된 데이터를 끌고 오는 과정이 존재한다.
  * ex> 한글에서 사용되는 '목적어'를 모두 가져오는 일련의 데이터 추출 알고리즘 
  * 따라서 배열보다는 객체일때가 많다.
*/

function isEndWithConsonent(koreaString) {
  const finalCharCode = koreaString.charCodeAt(koreaString.length - 1);
  const finalConsonantCode = (finalCharCode - 44032) % 28;
  return finalConsonantCode !== 0;
}
/* 
  ? isEndWithConsonent(koreaString) 함수
  * '한글'문자 자체의 코드를 분석하는 일련의 인코딩 메서드 이므로
  * 특징적으로 문장을 만드는 용도나, 기타 문자(charset) 관련 알고리즘을 구현할 때 사용하는 메서드와 알고리즘 관점이다.
  * 특수한 목적이 아니라면 직접 만들어 작성하기 보단, 레퍼런스를 참조하여 값을 구분해내는 함수로 제작하는 경우이다.
  * return 구조를 보았을때, finalConsonantCode 라는 변수는 무언가 빼고 나머지를 얻는 과정(인코딩관련)이 있었고, 결국엔 0이거나 0이 아니거나에 대한 구분이 필요한 것으로 확인된다.
  * 0은 false
  * 1은 true
  * 가 전제로 깔려져 있기 때문에
  * finalConsonantCode !== 0 비교연산자는 0이거나 0이 아니거나를 boolean 타입으로 가려내는 기능을 한다.
  
  ? 해당함수를 호출하면 true 이거나 false 이거나 둘 중 하나이다.

*/


function appendEulReul (koreaString) {
  // ? 함수이름이 이상하지만 그냥 "덧붙이기을를" 이다.
  if(isEndWithConsonent(koreaString) === true) {
    /*
      ? 목적어인 경우 단어마지막에 받침이 있는가 없는가로 '을', '를'을 구분하는 로직이 있다.
      ? 버터풀'을' 단어에 받침이 있으면 '을' 
      ? 시계'를' 단어에 받침이 없으면 '를'
      * 특별히 예외사항은 그다지 없기 때문에 true , false 만으로 문장을 완성시킬 수 있다.

      work .1 위에서 선언한 isEndWithConsonent() 함수를 호출하여 리턴이 true 이면 "을"을 붙인다.
      pseudo .1 isEndWithConsonent() 함수는 받침이 있는지 없는지만 구별하는 기능 '만' 가진 모듈이다.
      pseudo .2 true, false 외에는 기능이 없음을 인지하는 것이 중요하다.
      pseudo .3 boolean 값을 가지고 '문장을 처리하는' 일은 해당 함수인 appendEulReul() 함수가 맡는다.
    */
    return koreaString + "을";
  } else {
    return koreaString + "를";
  }
  /* 
    ? 두개의 리턴을 확인하면
    ? appendEulReul() 함수는 위의 isEndWithConsonent()가 true, false를 리턴하는 것과 다르게 '문자열' 만을 리턴한다.
    * 즉 글자를 만들어내는 기능'만' 할 뿐 다른 기능은 없다.
  */
}

function appendEga (koreaString) {
  if(isEndWithConsonent(koreaString) === true) {
    return koreaString + "이";
  } else {
    return koreaString + "가";
  }
}
/*
  ? appendEGa()도 위와 동일한 동작을 하며 '문자열'을 리턴한다.

*/



function makeSentence(subject, directObject, verb) {
  let randomValueArray = [];
  /*
    ? 매개변수 갯수 (3개) 만큼 랜덤한 숫자를 담을 배열공간을 만들었다. 
    * 아래의 for() 반복문에서 arguments <-- 라는 값이 '설정된 매개변수가 담긴 배열'을 의미한다.
    * 함수를 만들때 제작하는 매개변수는 사람이 확인하기 좋도록 이름을 작명하지만,
    * 사실 arguments[인덱스]를 다루고 있는 것과 같다.
    * iterator 라고 하며, 매개변수목록 = arguments 라고 생각해도 좋다.
  */
  for (let i = 0; i < arguments.length; i++) {
    let getRandomInt = Math.floor(Math.random() * (arguments[i].length - 0));
    randomValueArray.push(getRandomInt);
    // ? 한번 실행 될 때 마다 랜덤한 정수가 만들어지고, randomValueArray라는 배열에 push()에 의해 쌓이게 된다.
  }
  return `${appendEga(subject[randomValueArray[0]])} ${appendEulReul(directObject[randomValueArray[1]])} ${verb[randomValueArray[2]]}`;
  /*
    ? return 문자열의 의미
    * 복잡하게 배열을 사용한 것처럼 보이지만
    * 함수 시작 부분에서 공간을 만들어둔 randomValueArray는 랜덤한 숫자를 총 3개를 가지고 있고 순서대로 꺼내오는 과정이다.
    * 주어부분은 '이, 가' 가 필요하기에 위에서 만들어놓은 함수를 호출하고,
    * 목적어부분은 '을 를' 이 필요하기에  위에서 만든 함수을 호출 했다.
    * 랜덤한 숫자는 -> 각자의 배열의 길이값 안에서 생성되었기 때문에 배열 원소중 랜덤한 원소를 꺼내오는 과정이 있고
    * 꺼내오면서 이, 가, 을, 를붙는 가공이 처리된다.
    * 
    * 마치 기계 부품처럼 확인하면 다음과 같다.
    work .1 을, 를, 이, 가 를 구분하기 위해 '글자의 받침'을 조회하는 부품 하나
    work .2 을, 를, 이, 가 를 붙여주기 위해 문자열을 가공하는 부품 두개
    work .3 하나의 문장을 완성시키기 위해 문자를 조립하는 최종 기계 하나
    
    * 각각의 역할에 따라서 수행했고 '데이터타입' 과 리턴값을 활용해 무언가 '가공'했다는 점을 주목할 필요가 있다.
  */
}

console.log(makeSentence(subject, directObject, verb));
// ? 말이 이상하게 만들어지긴하지만, 완전한 문장을 완성해 내어 콘솔에 찍어낸다.
