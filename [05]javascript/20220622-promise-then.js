
function a() {
  return new Promise(function(resolve, reject){
    setTimeout(function() {
      console.log("지금 함수 a() 실행되었습니다.");
      resolve("성민씨메롱");
    },4000);
  });
}

a()
  .then(function(data){
    return new Promise(function(resolve, reject){
      setTimeout(function() {
        console.log("여기는 지금 then이라는 함수 안에서 실행된 것입니다. 1");
        resolve(data);
      },1000);
    });
  })
  .then(function(data){
    return new Promise(function(resolve, reject){
      setTimeout(function() {
        console.log("여기는 지금 then이라는 함수 안에서 실행된 것입니다. 2");
        resolve(data);
      },1000);
    });
  })
  .then(function(data){
    return new Promise(function(resolve, reject){
      setTimeout(function() {
        console.log("여기는 지금 then이라는 함수 안에서 실행된 것입니다. 3");
        resolve(data);
      },1000);
    });
  })
  .then(function(data){
    return new Promise(function(resolve, reject){
      setTimeout(function() {
        console.log("여기는 지금 then이라는 함수 안에서 실행된 것입니다. 4");
        resolve(data);
      },1000);
    });
  })
  .then(function(data){
    return new Promise(function(resolve, reject){
      setTimeout(function() {
        console.log("여기는 지금 then이라는 함수 안에서 실행된 것입니다. 5");
        resolve(data);
      },1000);
    });
  })

  // work .1 "1초 뒤에" 1번 행동에는 nuri가 10이 덧셈되고 콘솔에 출력된다. 110
// work .2 "1초 뒤에" 2번 행동에는 nuri를 30을 빼고 콘솔에 출력된다. 80 
// todo : 총 2초간 두번의 계산을 진행시킨다.
let nuri = 100;

function first() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      nuri = nuri + 10;
      console.log(nuri);
      resolve();   
    },1000);
  });
}
first()
  .then(function(data) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        nuri = nuri - 30;
        console.log(nuri);
        resolve();   
      },1000);
    });
  })

  
function text() {
  return `<div>hello</div>`;
}
function section() {
  return `<section>bye</section>`;
}

let timerA = setTimeout(() => {
  console.log(text());
}, 1000);

let timerB = setTimeout(() => {
  console.log(section());
}, 0);


