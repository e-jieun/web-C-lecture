// * 정적 타입 명시
const tsVariable: string = "타입스크립트는 변수의 타입을 지정해 주어야 합니다.";

// * 인터페이스 작성법을 통한 정적 타입 명시
interface objSetting {
  name: string,
  age: number,
  like: string,
}
/*
  ? interface 문법
  * 특정 단위나 타입명시를 묶음으로 사용할 수 있게끔 지원해주는 타입스크립트의 신규 작성법이다.
  * 작성할때마다 타입 명시를 하는 경우도 있지만 위처럼 공통되어 자주 명시해야 하는 것이라면,
  * interface 라는 선언으로 마치 변수 묶음처럼 사용할 수 있다.
*/

let examObjType : {name: string, age: number, like: string} = {
  name: "ukjae",
  age: 21,
  like:"soju",
}

let examObj: objSetting = {
  /*
    ? 위의 객체 examObjType 과 해당 객체를 비교 해보면
    * 위의 객체는 모두 타입명시를 즉석에서 하였고 
    * 아래의 객체는 interface 문법을 통해 진행하였다.
    * 공통되게 타입명시를 해야한다면 interface를 사용하여 '동일'하게 진행하였다는 것을 코드로 전달할 수 있다.
    * 반면 위의 객체 리터럴과 동시에 타입 명시의 장점은 한눈에 확인 할 수 있는 점이 있다. 
    * 특히 다량의 객체를 만들어내는 생성자 함수나, 반복문 등등 재사용성의 유지보수측면에서 interface 문법은
    * '정적(static)'으로 명시 한 후 사용하기 때문에 변동이 적어 코드의 안정화를 꾀할 수 있다.
  */
  name: "kong",
  age: 20,
  like: "water",
}

interface mathFunc {
  paramNumber: number;
  optionProps ? : number;
}
/* 
  ? 함수에 사용할 매개변수도 위와 같이 interface 사용이 가능하다.
  * 눈여겨 볼 interface 타입 명시중 optionProps 라는 값의 ? : (물음표 뒤 콜론) 표기를 확인 할 것
  * 정적(static)으로 모든 타입명시를 하는 것은 안정적이지만 반대급부로 사용하지 않으면 에러를 보여주기때문에
  * 모두 사용해야 한다는 전제가 붙어있다. 그러한 단점을 보완하기위해 interface 문법에는 ?: 옵션기능이 존재한다.
  * 해당 변수를 사용할 경우 작성된 것처럼 number를 사용해야 하고, 
  * ?: 표기를 통해 '사용하지 않을 수도' 있게 된다.
*/

function sum(paramNumber): mathFunc {
  return paramNumber;
};

/*
  ? 함수도 동일하게 타입 정의를 묶어놓은 interface 데이터를 새겨 넣을 수 있다.
  * 특이한 점은 위에서 서술했듯 ?: 옵션 기능을 통해 사용하지 않는 것으로 진행했다. 
  * 옵션으로 작성하지 않았다면 타입스트립트에서는 에러로 판단한다. 
*/

/* 
  todo : javascript vs typescript

  * 타입스크립트 자체의 '목적'은 코드 안정화에 있기 때문에 자바스크립트를 넘어서는 특별한 기능은 존재하지 않는점을 주요개념으로 삼는 것이 좋다.

  * 자바스크립트에서, 혹은 프로그래밍 언어 자체의 장점을 활용하기 위해 고안된 것이므로
  * 자바스크립트의 동작원리 + 클린코드를 위한 부가작업의 기준으로 타입스크립트를 활용하는 것이 좋다.
  * 다시말해 자바스크립트로 작성하는 것과 타입스크립트로 작성하는 것 두가지를 병행해야
  * 원활한 데이터 가공이 가능해진다.
*/