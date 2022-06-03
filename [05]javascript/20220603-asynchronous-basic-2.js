let timerA = setTimeout(() => {
  console.log('timerA : 3초 뒤에 실행');
}, 3000);

let timerB = setTimeout(() => {
  console.log('timerB : 2초 뒤에 실행');
}, 2000);

let timerC = setTimeout(() => {
  console.log('timerC : 1초 뒤에 실행');
}, 1000);

/*

  pseudo 1. 구현하고 싶은 형태
  pseudo 2. timerA 실행 종료 된 '다음' -> timerB 가 실행되고 -> timerB가 실행 종료된 '다음' -> timerC가 실행되어 종료되었으면 한다.
  pseudo 3. 결론적으로 세개의 함수는 총 6초에 걸려 실행되었으면 하는 것이 목적인데
  ! setTimeout() 비동기 함수
  pseudo 4. 비동기 처리 방식 때문에 '순서에 관계없이 처리되어' 3초만에 모든 함수가 실행되는 현상이 일어난다.
  pseudo 5.  가장 빨리 실행되는 순서로 동작되어 timerC -> timerB -> timerA 순으로 실행된 것을 조회할 수 있고 결과적으로 작성순서와 반대되어 실행된 결과를 낳았다.
  pseudo 6. timerA -> timerB -> timerC 즉, 동기방식으로 작성 된 순서대로 먼저 실행이 완료될 것들을 '순서에 맞게 실행' 시키는 방식을 활용하고자 한다면 몇가지 방법이 존재한다.


  




*/