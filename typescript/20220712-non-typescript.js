
// work.1 바닐라 자바스크립트 만으로 '타입을 모두 체크한' 안정적인 함수를 제작한다면,

function sumOne(a, b) {
  return a + b;
}
/* 
  ? sumOne() 위의 함수는 '문법'상으로는 전혀 문제가 없다.
  * 정상적으로 a와 b를 더하는 기능을 충실하게 수행한다.
  * 하지만 숫자만 사용해야 하는 함수 였을 경우, 해당 함수는 에러발생의 온상이 된다.
  * 간단한 함수이기때문에 타입체크의 필요성이 낮지만, 코드가 많아진다면 이야기는 달라진다.
*/

function sumTwo(a, b) {
  if(typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    console.error('parameter is not a number');
  }
}
/*
  ? sumTwo() 는 매개변수 두개가 모두 숫자여야만 함수를 실행
  * 둘 중 '하나라도' 숫자가 아니면 함수는 실행하지 않는다.
  * 값을 확인해야 하는 경우가 단 두가지 뿐이기 때문에 위와 같은 조건식만으로도
  * 숫자가 아닌 데이터를 걸러낼 수 있지만,
  * 걸러내어 에러를 확인시키는 것 외에 다른 동작을 할 수 없는 단순한 구조 이다.
*/

function sumThree(a, b) {
  try {
    if(typeof a === "number" && typeof b === "number") {
      return a + b;
    }
  } catch {
    if(typeof a !== "number") {
      console.log(`parameter a type is ${typeof a}, need to type check`);
    }
    if(typeof b !== "number") {
      console.log(`parameter b type is ${typeof b}, need to type check`);
    }
  } finally {
    console.log("if you have to do it even if the data is wrong");
    console.log(`return value is ${a + b}`);
  }
}

/*
  ? sumThree()
  * 정식적인 예외처리(exception) 문법을 사용한다면 sumThree()와 같이 
  * try ~ catch ~ finally 문법을 사용해야 한다.
  * 예외처리는 어떤 일(원하는)이 일어 나지 "않았을 수도 있을때"의 여지를 처리하는 것으로
  * 통신이나 데이터로딩 등등에서는 매우흔하게 사용하는 처리 및 문법 이다.
  * try : 조건이 수행되었을때
  * catch : 조건이 수행되지 않았을때
  * finally : 조건유무를 무시하고 무조건 실행하는 부분

  * 총 세가지의 경우의 수를 따져야 한다. 
  * 특히 try 부분, 즉 sumTwo에서 다루고 있는 조건식은, 매개변수 a와 b중 둘중에 무엇이 데이터가 틀렸는지 알 수 없기 때문에
  * 예외처리 방식으로는 일반적으로 각각의 작업을 모두 '검사(inspect)' 해야 한다.
  * 각각의 매개변수에 if()문과 typeof 연산자를 설치한 것을 확인할 것

  * 마지막 finally 에서의 의도는 "매개변수가 원하지 않는 것이여도 덧셈을 실행했을때의 결과"를 콘솔에 조회하도록 작성되었다.
*/

function sumFour(a, b) {
  try {
    if(typeof a === "number" && typeof b === "number") {
      return a + b;
    }
  } catch {
    if(typeof a !== "number") {
      console.log(`parameter a type is ${typeof a}, need to type check`);
      if(typeof a === "string") {
        a = Number(a);
        if(!Number.isNaN(a)){
          console.log(`parameter a value is passible change type number`);
        }
      } else {
        console.log(`parameter a type is not number and can't chanege number what another Data type`);
      }
    }
    if(typeof b !== "number") {
      console.log(`parameter b type is ${typeof b}, need to type check`);
      if(typeof b === "string") {
        b = Number(b);
        if(!Number.isNaN(b)){
          console.log(`parameter b value is passible change type number`);
        }
      } else {
        console.log(`parameter a type is not number and can't chanege number what another Data type`);
      }
    }
  } finally {
    console.log("if you have to do it even if the data is wrong");
    console.log(`return value is ${a + b}`);
  }
}

/*
  ? sumFour() 
  * 어떻게든 수행을 해야만 하는 억지를 부려야 한다면 위와같이
  * 강제로 데이터타입을 변환하는 작업이 추가되므로
  * 함수의 복잡도는 매우 높아질 수 밖에 없다.
  * '모든 경우의 수'를 최대한 없애야 하는 일련의 과정이 다 담겨 있으나, 
  * sumFour() 함수에서도 숫자가 정수인지, 실수인지 판별하는 것은 어렵다.

*/


/*
  ? 서비스의 안정화가 최우선인 결제시스템, 로그인, 개인정보 등등 매우 많은 경우에
  * 위의 예외처리와 같은 여러가지 처리를 통해서 모두 프로그램 내 제어영역에 들어오게끔 까다로운 처리를 진행해야 한다.
  * 프론트엔드 중 디자인효과를 위한 인터렉션 제어의 부분은
  * 사실상 '실패'의 여지는 전혀 가지고 있지 않기 때문에 예외처리가 불필요하지만
  * 완전한 상태에 가깝게 추구한다면 위와같은 복잡도를 감수해야한다.
  * 이런점에서 동적 타입 명시는 편리하지만, '정확도'를 기대해야하는 경우에는 매우 불편한 방식이다.
  * 타입스크립트의 출현은
  * 자바스크립트의 동적 타입 제어를 사전의 제어영역으로 만들어 제작당시에는 불편한 점을 발생시키지만
  * 큰 시선으로 봤을때 '타입'이나, '약속'에 따른 데이터 처리에서 압도적인 예방능력이 있기때문에
  * 자바스크립트의 상위호환으로 '능력'을 인정받고 있다.
*/