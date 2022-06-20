import diceAlgorithm from './dice-func.js'
/* 
  work .1 주사위 눈의 갯수를 결정할 알고리즘 함수를 dice-func.js 라는 파일에 모듈화 시켰다.
  work .2 위의 모듈은 문서와 상관없이 랜덤 숫자(정수)를 추출해주는 역알을 한다.
*/


window.addEventListener('load', function() {
  // work .2 안정적인 문서로드를 위해 window에 load 이벤트를 달아
  // work .2 혹시모를 에러를 예방했다. (달아주는 것이 좋다)


  const root = document.getElementById('root');
  const dice = document.getElementById('dice');
  const trigger = document.getElementById('trigger');
  // work .3 핸들링 할 DOM API 요소들을 식별했다.

  
  trigger.addEventListener('click', function() {
    // work .4 버튼(trigger)에 클릭이벤트를 설치했다.
    let rotateValue = 0;
    dice.style.transform = `rotate(${rotateValue}deg)`;
    // work .5 주사위 모양을 결정지어주는 요소에 회전 인터렉션을 주기위해 이벤트 '내'에서 초기화를 진행했다.
    dice.innerHTML = "";
    /*
      todo : dice.innerHTML = ""; 로직의 의미
      ? 직역하면 dice 요소의innerHTML 값을 "" 빈문자열로 대입하겠다. 라는 간단한 로직이지만, 의미하는 바는 매우 크다.
      * dice 요소의 자식이 있다면 모두 사용하지 않겠다. 라는 if문 논리와, 이벤트가 일어날때마다 자식을 없애는 요긴한 방식이기때문에
      * 해당 예제는 간단한 주사위 앱이지만,
      * 이러한 구조가 '페이지' 처럼 연출 될때는 라우팅 개념이 된다.
      * 즉 단일페이지에서 페이지가 전환되는 듯한 연출이 되는 효과를 얻을 수 있다.
    */
    let getDiceNumber = diceAlgorithm(1,7);
    // work .6 위에서 가져온 diceAlgorithm() 함수를 실행시켜 값을 얻었다.
    let diceItem = [];
    let sectionString = `<section></section>`;
    // work .7 dice 요소의 자식요소에 section 태그를 배열 + 문자열로 처리하기 위해 두개의 변수를 초기화 하였다.

    for(let i = 0; i < getDiceNumber; i++) {
      diceItem.push(sectionString);
    }
    // work .8 for() 반복문 횟수는 위에서 실행시킨 diceAlgorithm() 모듈이 뽑아낸 특정 정수 만큼 가변적으로 반복시키는 효과를 가지고 있고, 한번 실행될때마다 배열인 diceItem이라는 배열에 push() 즉 원소로 추가된다.
    // work .8 이후 dice의 자식으로 추가시키는 방식으로 문서를 변형할 예정

    let rotateTimer = setInterval(() => {
      // work .9 rotateTimer를 통해서 '클릭될 때마다' 위에서 초기화시킨 rotateValue를 증가시키고 -> rotate() 값으로 할당시켜 마치 주사위가 도는 듯한 연출을 진행했다.
      if(rotateValue  < 90) {
        rotateValue++;
        dice.innerHTML = diceItem.join("");
        // work .10 setInterval() 함수가 실행되면, 위에서 반복문으로 배열의 원소를 문자열로 붙여 dice.innerHTML 에 할당한다.
        console.log(rotateValue)
        dice.style.transform = `rotate(${rotateValue}deg)`;
      } 
      if(rotateValue >= 90) {
        clearInterval(rotateTimer);
        rotateValue = 0;
      }
    }, 4);
  });









});