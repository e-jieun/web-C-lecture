const orderExecution = new Promise((resolve) => {
  resolve();
  // 인스턴스 orderExecution은 resolve()를 실행하고 종료된다.
  // * 매우 특이한점은 실행 후 종료로 끝나는 것이 아닌,
  // * '대기(pending)' 상태가 된다.
  // * resolve(); 라는 매개변수처럼 보이는 함수는 '이행했을때', 즉 '조건의 순서에 맞게 무언가 연산' 한다고 할 수 있다. 
  // ? 비유하면 다음과 같다.
  // * "무언가 순서를 제어하면서 실행시킬 것이니까 동작을 대기하겠습니다." 로 비유할 수 있다.

});

/*

orderExecution.then(첫번째동작).then(두번째동작)






*/


orderExecution
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(()=>{
        console.log("timerA : 3초 뒤에 실행");
        resolve();
      }, 3000);
    });
  })
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(()=>{
        console.log("timerB : 2초 뒤에 실행");
        resolve();
      }, 2000);
    });
  })
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(()=>{
        console.log("timerC : 1초 뒤에 실행");
        resolve();
      }, 1000);
    });
  });

