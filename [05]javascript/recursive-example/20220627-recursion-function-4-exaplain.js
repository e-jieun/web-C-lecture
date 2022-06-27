
let recallCount = 0;

function randomArray(min, max, loopValue, limitValue) {

  let storageArray = [];

  for (let i = 0; i < loopValue; i++) {
    // ? 지정한 횟수(loopValue) 만큼 반복문이 실행된다.

    const getRandomInt = Math.floor(Math.random() * (max - min) + min);
    /* 
      ? Math.random() * (최대값 - 최소값) + 최소값
      * 랜덤 메서드는 실행시키면 '실수(소숫점이 있는수)'를 반환한다.
      * 랜덤의 범위를 지정하기 위해 일련의 수식을 붙였다. 
      * 결과적으로 설정한 최대값과 최소값 사이의 랜덤한 수를 반환하라는 주문이다.
      ? Math.floor() 
      * 랜덤 메서드와 함께 작성되었기때문에 복잡해보이지만 '어떤 숫자'의 정수를 추출하는 간단한 수학관련 메서드이다.
      * 정수(integer) : 소숫점이 없는 수. 양수 0 음수
    */
    storageArray.push(getRandomInt);
    /*
      ? storageArray
      * 매개변수로 지정한 순회값 만큼 '랜덤으로 추출된 정수'를 배열에 차곡차곡 밀어 넣는 과정이다.
      * storageArray 작명한 그대로 '잠깐 저장'하는 용도로 사용하는 지역변수 형태의 배열이다.
    */
  }

  let totalSum = storageArray.reduce((prev, cur) => {
    return prev + cur;
    /* 
      ? reduce() 배열을 순회하면서 값을 누산하는 메서드이다.
      ? previous : 이전의
      ? current : 현재의
      * 배열을 순회하면서 이전 요소와 현재요소를 더하고 이전요소로 취급하는 방식이다.
      * "배열의 모든 값을 덧셈하여 총합을 구한다" 로 풀어 이야기 할 수 있다.

    */
  });

  if (totalSum < limitValue) {
    /*
      ? 조건식
      * 바로 위 reduce() 메서드를 통해서 누산된(모두합쳐진) 값을 totalSum 이라는 변수에 담았다.
      * totalSum 값과 매개변수를 통해 제한시킬(구분시킬) 값을 비교 했다.

    */

    recallCount++;
    randomArray(min, max, loopValue, limitValue);
    /* 
      ? randomArray(min, max, loopValue, limitValue);
      * 해당예제에서 가장 특이한 코드라고 할 수 있는 부분이다.
      * 선언중인 함수가 자기자신을 다시 호출하는 방식이다.
      * '외부함수'를 '내부에서 호출' 이라고 개발자들이 부르며,
      * 이것을 '재귀함수(recursion function)' 이라고 부른다.
      * 
      * 결과적으로 배열의 총합 값이 매개변수 제한값보다 작다면 다시 처음으로 호출된다.
      ? 호출되었을때를 생각해보면 '지역변수'로 자리잡고 있는 storageArray 배열은 가지고 있는 원소가 아무것도 없는 상태로 다시 되돌아 간다.
      * '조건에 충족하지 못하면 다시실행' 이라는 의도이며,
      * 랜덤한 값을 추려내는데 limitValue 라는 값보다 커야만 다시 되돌아가는 일이 없는 분기(branch)가 이루어진다.
      * "어떠한 값이 나올지 모르니, 적당히 맘에 들만한 값이 나올때까지 실행시켜줘" 로 비유할 수 있다.

    */
    console.log(recallCount);
    // ? 위 콘솔을 확인하면 "몇번의 시도를 했는지" 를 파일을 실행할때마다 확인할 수 있다.

  } else {
    // ? else 인 경우는 '적당한 값으로 된 배열' 이 충족되었을 때를 뜻한다.

    let sortResult = storageArray.sort((a, b) => {
      return a - b
      /* 
        ? .sort()
        * 오름차순, 내림차순을 정리하고자 할때 매우 간편하게 사용할 수 있는 배열 메서드 이다.
        * 위의 구문은 sortResult 라는 변수에 오름차순으로 배열을 정리하고자 하는 의도가 담겨 있다.
        * 오름차순 : 낮은 수에서부터 높은 수에 이르는 것을 뜻한다.
        * a - b 를 b - a로 바꾸면 내림차순으로 바뀐다.
      */
    });

    console.log(sortResult);
    // ? 오름차순으로 배열이 정돈되었는지 확인했다.

    /*
      ? namingArray()
      * 아래의 코드는 변수로 담아놓은 '함수' 이다. 함수 표현식(function expression)이라고 부르며,
      * 함수 리터럴(function literal) 이라고 부르는 경우가 많다.
      * 아래와 같은 함수는 '이름이 없는' 익명함수이다.
      * 이름'역할'을 하는 변수가 있는 형태이다.
      * 사실상 함수를 선언한 셈이지만, 엄밀히 보았을때 매우 다르다.    
    
      * function namingArrat(array, min, mix, loopValue, limitValue) {
        * 로직
      }
      * 함수 선언문으로 작성했을 때 위와 같이 모든 매개변수를 만들어주어야 '만' 활용이 가능하다.
      * 따라서 내부함수로 사용하기에는 매개변수가 몇개인지 또 어디에 쓰이는지 찾아야 하는 매우큰 단점이 존재한다.
      * 하지만 아래와 같은 함수리터럴로 작성했을때는 매개변수를 다 만들어주지 않아도 함수자체가 내부에 있기때문에
      * randomArray()에서 만들어진 매개변수를 언제든지 사용할 수 있다.
      * 반대로 함수를 외부에서 호출하고자 할때는 별도로 함수를 반환(return) 해주어야 하기 때문에 외부에서도 사용할 함수라면
      * 아래처럼 사용하지 않고 밖에서 선언하거나 작성한다.
      * 'wrapper'(감싸는) 의 역할을 하는 경향이 있으며 함수 내부에서 자주사용되는 경우에도 아래와같이 작성되기도 한다. 
    
    */
    const namingArray = (array) => {
      let mappingArray = [];
      array.map((element) => {
        /* 
          ? element?
          * 여기서 콜백함수의 인자로 받은 element 매개변수는 위의 정렬된 배열의 원소 하나를 의미한다.
        */
        let medianValue = min + ((max-min) / 2);
        //? medianValue 변수? 
        // * 최대값 100과 최소값 50의 중간지점인 75 값을 얻기 위해 작성된 수식과 변수이다.
        // * 함수이기때문에 되도록 '값'을 직접 알고리즘에 작성하는 리터럴 방식을 지양한다.
        // * 재활용성을 반드시 생각해야 하기 때문
        if(element > medianValue) {
          mappingArray.push(`over : ${element}`);
          // ? 어떤 값을 특정한 규칙에 의해 변형시키는 일련의 행동을 매핑(mapping)한다는 어휘로 사용되기도 한다.
        } else {
          mappingArray.push(`under : ${element}`);
          /* 
            ? 따라서 위의 조건식은
            * 75보다 큰 수는 'over' 라는 문자열이 붙게끔
            * 75보다 작은 수는 'under' 라는 문자열이 붙어서 다시 배열로 넣어놓는 역할을 한다.
            * 
            * 기존의 배열을 하나씩 꺼내 다른 값으로 바꾸고 다시 배열로 도로 집어 넣는 일련의 행위이다.
            * 동적으로 HTML을 커스텀할 때 매우 자주 활용되기때문에 숙달할 필요가 있다.
          */
        }
      });
      return mappingArray;
      // ? 어떤 조건식이든 .push()를 통해 특정한 값으로 변형되어 다시 배치된 배열이 반환(return) 되도록 작성했다.
    }
    let result = namingArray(sortResult);
    /*
      ? namingArray(sortResult);
      * 결과적으로 오름차순으로 정렬된 어떤 배열이 정체모를 내부 함수를 호출하여 'result'라는 값으로 담기게 되었다.
      * 관점으로 확인해볼 중요한 사항은
      * namingArray()의 알고리즘이 무엇인지 모르는 상태가 정상적이며 '그저' result라는 변수에 담겼다는 것은 확실하다는 것이다.
      * 분리하여 복잡한 코드를 추적하는 안목이 필요하고, 숙달될 수록 코드를 보는 피로도는 급격히 내려간다.
    */
    return result;
    /*
      ? 반환값 result
      * 어떤 값이 겟팅(getting) 되고, 다시 셋팅(setting)하는 일련의 과정이 녹아들어 있기 때문에
      * result가 무엇인지 찾는 방식을 먼저 기준점 잡는다면 위의 복잡한 코드에 대한 실마리를 잡기 편리하다.
      * "마치 컨베이어 벨트" 에 놓여진 사과처럼 어떤 값이 만들어지고 정돈되면서 다시 배열로 돌려받는 구조가 
      * 해당 구문의 핵심 개념이다.

    */
  }

}

const executionObj = {
  min: 50,
  max: 100,
  looValue : 10,
  limitValue : 800,
}

/*
  ? 매개변수의 값을 직접사용하지 않고, 위처럼 객체에 담는 이유
  * 함수화를 통해 코드의 재활용성을 높히는 작업이 매우 훌륭하고 생산성높은 방식이지만,
  * 매개변수가 무엇을 의미하는지, 또 어떤 분류로 가지고 있는지 위와같은 '숫자로만' 이루어진 함수에서는 복잡도가 올라간다.
  ? randomArray(50, 100, 10, 800);
  * 위처럼 작성해도 동일한 코드이나, 값을 '값들의 묶음상자'격인 객체에 담는 경우가 존재한다.
  * 비슷한, 혹은 같은 용도의 값이라면 하나의 객체로 묶어 관리하는 것이 매우 독특한 개념이며,
  ? 여러개의 입력을 받아야 하거나, 코드량이 많은 경우 객체의 본질적인 특성인 '뜻을 내포하는' 값으로 반영해서 사용하는 경우
  * 일부러 객체를 활용하여 값을 묶어놓는 행위를 하고, 
  * 이는 작성할때는 약간의 불편함을 감수해야 하지만,코드가 현재보다 열배 많아진다면, 아래처럼 사용하는 것이 훨씬 더 직관적이다.
  * 

*/

console.log(randomArray(executionObj.min, executionObj.max, executionObj.loopValue, executionObj.limitValue));


