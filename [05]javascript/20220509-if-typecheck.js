
let a = 1;
let b = 1;
let c = 2;

function valueTestOne() {
  if(typeof a === "number") {
    console.log("변수 a는 데이터타입이 숫자입니다.");
  } else {
    console.log("변수 a는 숫자타입이 아닙니다.");
  }
  if(typeof b === "number") {
    console.log("변수 b는 데이터타입이 숫자입니다.");
  } else {
    console.log("변수 b는 숫자타입이 아닙니다.");
  }
}

// valueTest();


// if / else 중에 하나가 메인 알고리즘 인 경우가 많다.

function valueTestTwo() {
  if(typeof a === "string") {
    console.log('a는 string입니다.');
  } else {
    if(typeof a === "number") {
      console.log("a는 number입니다.");
      if(a === 1) {
        console.log('a는 1입니다.');
      }else {
        console.log("a는 1이 아닙니다.");
      }
    } else {
      console.log("a는 number가 아닙니다.")
    }

  }
}
valueTestTwo();

/* 

* if() 제어문은 조건식에 따라 매우 똑똑한 판단을 내릴 수 있게끔 도와준다.
* 위의 예제는 극단적인 if()문의 중첩을 보여주는 예이나, 어떤 방식으로 어떻게 나누어지는지 따라서 확인해볼 필요가 있다.

? valueTestOne() 예제의 경우
* 두개의 if()문이 동등한 자격으로 검사를 두번 하는 경우가 된다.
? valueTestTwo() 예제의 경우
* 마치 HTML 자식을 구성하는 개념처럼 if()문을 중첩하여 사용한 예제이다. 까다로운 조건을 거쳐야 할 때 불가피하게 사용하는 경우가 있다.




*/
