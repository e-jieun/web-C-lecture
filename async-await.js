let a = setTimeout(() => {
  console.log("첫번째 작업입니다.");
}, 1000);
let b = setTimeout(() => {
  console.log("두번째 작업입니다.");
}, 2000);
let c = setTimeout(() => {
  console.log("세번째 작업입니다.");
}, 3000);

/* 
  work .1 a는 1초, b는 2초 c는 3초의 텀을 두고 실행하게 작성하였다.
  pseudo.1 setTimeout()과 같은 '비동기' 함수는 효율적인 코드 처리를 위해 순서대로 기다려가며 절차를 지키는 '동기' 방식과 다르게 동작한다.
  pseudo.2 먼저 끝날 수 있으면 먼저 끝낸다. 라는것이 '비동기'의 핵심 개념이다.

  * 여건상 처리해야할 데이터가 매우 많은 경우(몇십기가바이트의 계산을 해야하는등)에는 위의 코드라고 했을때 총합 6초가 걸릴 실행을 '최종' 3초에 모두 끝내버릴 수 있게 된다.
  * 다른 두가지가 순서에 '상관없다면' 비동기 처리가 압도적으로 효율적이다.
  * 하지만 디자인 작업에서의 제어는 의외로 a작업이 끝난뒤에 그 다음 b작업을 해야만 하는 경우가 발생한다. 이것은 동기방식이라고 프로그래밍에서는 부르고 있다.
  * 순서를 지킨다 = 동기
  * 순서를 지키지 않는다 = 비동기
  * 대부분 동기 방식으로 처리가 되나, 특별히 동기방식 기반이 아닌 것이 setTimeout, setInterval과 같은 함수들이 존재한다.
  * 순서대로 차례를 지켜 움직여야 하는데 동시에 실행되어버리는 현상을 발견할 수 있다.

*/

function funcA() {
  return new Promise((resolve) => {
    setTimeout(()=> {
      resolve("네번째 작업을 1초 기다렸다가 실행했습니다.");
    }, 1000);
  });
};
function funcB() {
  return new Promise((resolve) => {
    setTimeout(()=> {
      resolve("다섯번째 작업을 1초 기다렸다가 실행했습니다.");
    }, 1000);
  });
};

/* 
  ? return new Promise()

  * funcA()와 funcB() 리턴 데이터를 확인하면 매우 특이한 점을 확인할 수 있다.
  * 직역그대로 "약속"이라는 뜻의 promise 생성자 함수의 '인스턴트"





*/

async function actionFunc() {
  let result;
  result = await funcA();
  console.log(result);
  result = await funcB();
  console.log(result);
}

actionFunc();