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

? 예제 설명

* 1. setTimeout() : 비동기 내장 함수
* 1-1. 지정된 시간 이후에 한번 실행하는 함수로 setInterval()과 함께 자주 활용하는 자바스크립트 코어 메서드이다.
* 1-2. setInterval()과 인수(argument) 작성방식이 동일하다.
* 1-3. setTimeout(콜백함수, 딜레이시간);

* 2. 세 개의 비동기 함수 작성 : timerA, timerB, timerC 세개를 차례대로 작성했다.

pseudo 1. timerA가 먼저 작성되었기 때문에 timerA가 먼저 실행되어야 자바스크립트 본래의 실행방식에 맞다.
pseudo 2. 일반적인 실행 방식 순서라면 timerA -> timerB -> timerC 순서로 실행되는 것이 정상이다.
pseudo 3. 지정된 시간이 가장 짧은 함수는 timerC 이다. 즉 timerC는 1초만 기다리면 된다.
pseudo 4. 하지만 먼저 작성된 timerA는 3초의 시간을 기다려야 한다.
? 먼저 실행할 수 있다면 기존 실행 순서를 어길수는 없는가 ? = 비동기(asynchronous)
? 먼저 실행할 수 있어도 작성된 실생 순서를 엄격하게 지켜야만 한다 = 동기(synchronous)






*/