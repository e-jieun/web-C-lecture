/*
  ? 값을 분별하는 것이 아닌, 프로그래밍 내부에서 진행되는 '동작'을 제어하기 때문에
  ? 눈에 보이는 결과값을 로깅하는 것이 불편하다.
  ? 아래의 예시는 다음과 같은 목적을 가지고 있다.

  work.1 변수 y는 0이라는 숫자로 초기화 되었고, 0에서부터 10까지 증가되었다가, 다시금 10부터 0으로 감소하는 일련의 행동을 제어하고싶다.
  work.2 y가 0에서 부터 10까지 도착했을때 어떠한 변수값을 변화시키는 방식( let isStatus = true, false) 같은 방식은 '값'을 제어하는 방식이기때문에 이번 방식에서는 지양하고, '동작'을 제어하는 방식을 고려하고 싶다.
  work.3 하지만 여기서 봉착하는 문제는 'setInterval()' 함수는 '비동기' 즉, 순서를 기다리지 않고 실행되는 방식이기 때문에 '순서'를 기다리게 하는 것은 work.2번 과 같은 '값'을 제어하는 방법 말고는 마땅찮다.
  work.4 그래서 고안된 '동작제어용' 문법인 new Promise 구문을 활용해서 순서를 직접적으로 제작자가 제어하는 방식을 채택한 것이 아래의 예제 이다.

  ? 구조는 다음과 같다.

  * 첫번째 행동을 하는 함수 -> 두번째행동을 하는 함수 -> 세번째 행동을 하는 함수 고안한뒤
  * 함수를 '호출'하는 것과 동시에 .then() 이라는 특이한 하위함수를 같이 호출하면서 동작을 제어했다.
  
  * orderActio()
  *   .then()
  *   .then()
  * 
  * 아래의 코드는 상당히 복잡해 보이지만, 위와 같은 구조이다.

  ? 동작이 눈에 보이지 않기 때문에 -3.js 파일과 달리 '직접'실행할 수 있는 방식으로 예시를 제작하였으므로
  ? 동작시점에서 번호가 붙은 console.log()메세지가 실행된다.
  ? 동작순서가 어떤방식으로 흐르는지 확인해볼것
  * 다음 파일에서 자세하게 설명

*/
let y = 0;

function orderAction(y) {
  return new Promise((resolve, reject) => {
    console.log(` 0. 매개변수 y는 ${y} 값을 가지고 있습니다.`);
    console.log(` 1. 함수의 매개변수 y값을 다음 동작할 함수에 넘기겠습니다.`);
    resolve(y);
  });
}

orderAction(y)
  .then((y) => {
    return new Promise((resolve, reject) => {
      console.log(` 2. orderAction() 함수에서 매개변수로 받은 데이터 값 y를 인계받았습니다.`)
      let startTimer = setInterval(() => {
        if (y < 10) {
          y++;
          console.log(`3. 넘겨받은 매개변수값 y가 ${y}값으로 증가하고 있습니다.`);
        } else {
          clearInterval(startTimer);
          console.log(`4. 증가하는 함수가 종료되고, 다음 동작을 위해 매개변수 y를 넘기겠습니다.`);
          resolve(y);
        }
      },500);

    });
  })
  .then((y) => {
    return new Promise((resolve, reject) => {
      console.log(`5. 매개변수 y를 넘겨받은 두번째 동작부분에 도착했습니다. `);
      let endTimer = setInterval(() => {
        if (y > 0) {
          y--;
          console.log(`6. 두번째로 넘겨받은 매개변수값 y가 ${y}는 이번엔 감소하고 있습니다.`);
        } else {
          clearInterval(endTimer);
          console.log(`7. 감소하는 함수가 종료되고, 혹시모를 다음 동작을 위해 매개면수 ${y}를 넘겨놓겠습니다.`);
          resolve(y);
        }
      },500);
    });
  });