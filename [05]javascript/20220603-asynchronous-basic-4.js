function one() {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      console.log("첫번째 3000밀리초 뒤에 실행되었습니다"); 
      resolve();
    },3000);
  });
};
one().then(() => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      console.log("두번째 2000밀리초 뒤에 실행되었습니다.");
      resolve();
    },2000);
  });
}).then(()=> {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      console.log("세번째 1000밀리초 뒤에 실행되었습니다.");
      resolve();
    },1000);
  })
});

/*

todo : 20220603-asynchronous-basic-3번 파일과 비교해서 코드를 확인 할 것

pseudo 1. 3번파일과 4번 파일의 코드양을 직관적으로 보았을 때 해당 예제인 4번 파일이 훨씬 길다. 
pseudo 2. 생성자 함수에서 인스턴스로 생성한 값 new 키워드를 보았지만 이것이 무엇을 뜻하는지 피상적으로만 알고있고 이것을 정확이 무슨 기능을 하는지는 문서를 찾아봐도 어렵다. 
pseudo 3. 위의 코드에 대해 비약과 비유를 몽땅 섞어 아래와 같이 설명할 수 있다.
* "순서 어기는 함수들을 순서에 맞게 줄세워 놓은 작업"
pseudo 4. 의의로는 3번 파일이 가지고 있는 문제 '콜백헬'을 해결할 수 있다.
pseudo 4. 예제가 '어떤 동작을 복잡하게 요구하고 연결되어있다고 상정했을때 콜백 방식은 너무나 많은 정보들이 유기적으로 작용하고 있어 '정보를 파악하는 것'은 물론 코드를 변경하기에도 어려워진다. 
pseudo 5. 리턴을 적극 사용하는 방식으로, Promise라는 특별한 생성자 함수를 사용하면 동작 순서 (동기, 비동기)를 원하는데로 '제어할 수 있다.'
pseudo 6. 이것을 이해했을때의 기술적 이득
* 1. 순서를 동시(병렬적으로 비동기방식)에 진행을 제어할 수 있다.
* 2. 순서를 필요한 만큼 순서에 따라 (직렬적으로 동기방식)으로 진행을 제어할 수 있다.
* 3. 리턴과 메서드 체인을 주로 사용하기때문에 코드의 규모가 커질 수록 현재의 예제보다 훨씬 직관적인 구조를 만들 수 있고, 디버깅에도 매우 용이하다.
* 4. 동작을 제어하는 setInterval, setTimeout 등등 기본 비동기 함수를 편안하게 순서제어를 할 수 있기 때문에 인터렉티브 웹작업에서 매우 유용하다.
* 5. 프로그래밍 엔진 내부에서 동작하는 고도의 프로세스이기 때문에 학습비용이 많이 들지만 그에 상응하는 컴퓨팅 이해를 확보 할 수 있다.



*/