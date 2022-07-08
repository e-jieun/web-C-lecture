const exampleArray = ["10px", "20px", "30px", "40px", "50px", "60px", "70px", "80px"];
/*
  Question : 문자열로 된 배열의 원소들을 '연산'하고 싶다.
  pseudo : 연산(덧셈 뺄셈등)을 하고자 할때, 문자열 방식은 앞뒤 결합만 하기 때문에 연산이 불가능하다.
  pseudo : 문자열을 숫자로 바꾸어주는 Number(), parseInt() 와 같은것들이 존재하지만 위의 조건은 'px'이라는 숫자로 변환될 수 없는 데이터 가 담겨있다. 
  work .1 배열의 원소가 '일괄 처리' 할 수 있는 상태로 만들기
  * 위의 조건이 되는 exampleArray는 모두 동일한 문자열 스타일(값 뒤에 px 단위가 붙어있는) 이기 때문에 work.1 과 같은 작업이 해당 예제에서는 굳이 필요없는 작업이다.
  * 하지만 위의 데이터가 아닌 무언가 다른 데이터가 있는 경우도 존재하기 때문에 '검사(inspect)' 후 처리 과정이 필요하다.
  
  work. 2 숫자로 변환가능한 상태로 데이터를 가공하기
  pseudo : 공통된 제약상태 '원소마다 숫자로 바꿀수 없는 px 문자열을 발견' 했다는 점을 착안한다.
  pseudo : 위 work.1 단계에서 에러, 예외가 발생하는 사항은 모두 정리되었기 때문에 사실상 모두 동일한 패턴의 원소를 가지고 있다는 것이 확정인 점

* .slice(start, end);
* .includes('string');
* .lastIndexOf('string');
* .indexOf('string');
* .splice(start index, from start index count);

? 위와 같은 매우 편리한 자바스크립트 배열 메서드들을 떠올려 활용해보기위에 메모해 두었다.
*/
console.log(exampleArray[0].includes('px'));
// 포함되는지 작동여부를 간단하게 테스트
console.log(exampleArray[1].indexOf('px'));
// 위치가 어디있는지 작동여부를 간단하게 테스트
console.log(exampleArray[2].slice(0, exampleArray[2].indexOf('px')));
// 잘라내는 (.slice()) 메서드가 작동되는지 간단하게 테스트


exampleArray.filter((value, index) => {
  if (value.includes('px')) {} else {
    console.log('조건에 맞지 않는 원소가 존재합니다.');
    exampleArray.splice(index, 1);
  }
});
/*
  ? .filter() 
  * 필터 메서드를 활용하여 "px"이라는 단어가 원소에 포함되는지 여부를 검사했다.
  * 위 예제 보다는 다양한 상황에서 편한 오류여지를 사전에 정리하는 것이 주요한 코딩 관점이다.

*/
const intValueArray = [];
for (let i = 0; i < exampleArray.length; i++) {
  let getEndIndex = exampleArray[i].indexOf('px');
  let temp = exampleArray[i].slice(0, getEndIndex);
  intValueArray.push(parseInt(temp));
}
/*
  ? for();
  * 위에서 간단하게 테스트한 각종 메서드들을 조합해서 알고리즘을 제작하였다.
  * 제거할 데이터의 순서값(index)을 얻어내고
  * 원소 하나하나 마다 데이터를 잘라내는 .slice() 메서드로 temp에 가공완료된 데이터를 담았다.
  * 가공된 문자열이기때문에 temp 변수 부터는 문자열타입에서 숫자로 변환이 가능하다.
  * 새로운 배열에 .push()를 통해 순회하고 있는 값을 추가하는 방식을 취했다.
  * 
  * 결과적으로 inValueArray [] 배열은 숫자만 남게 된다.

  ? substring등 문자열을 가공하는 여러 편리한 메서드 기능을 지원하기 때문에 다르게 접근하여 가공하는 것도 얼마든지 가공할 수 있다.
  ? map() 메서드를 사용하면 더욱 간단코드로 해결할 수 있지만, 원리를 보여주기 위해 작성하지 않았음을 명시
  * 일반적으로 이러한 공통된 데이터를 동일하게 가공하는 작업은 매핑(.map) 하는 방식이 옳은 방식이다.
  * .map() 메서드를 활용해서 처리를 시도해볼 것 

*/
console.log(intValueArray);

function arrayElementSum(firstElement, secondElement) {
  if(Number.isInteger(firstElement) && Number.isInteger(secondElement)) {
    return firstElement + secondElement;
  } else {
    console.error('type int error');
  }
}
/* 
  * 해당 함수는 그저 숫자값 두개를 더할 뿐이다. 위의 알고리즘과는 전혀 관계가 없다.
  * 정확한 숫자를 얻어야 하기 때문에 엄격한 조건문을 장치했다.
*/

function makePixelValue(value) {
  let unit = "px";
  return value + unit;
}

/* 
  ? 위의 코드에서 열심히 떼어낸 것이 아쉽게 느껴지지만,
  * 가공된 코드를 필요한 만큼 연산했기 때문에, 다시 원래의 원소 방식으로 바꾸는 함수를 만들었다.
  * 이 역시 위의 함수 알고리즘은 데이터자체로서의 코드들과 관련이 없다.

*/

/*
  ? 전제조건이었던 '문자열로된 어떤 단위 숫자값'을 연산 할 수 있는 모든 기능(기계) 들이 완성되었다.
  * 연습해볼 요점 : 필요한 만큼 작동이 제대로 되는지 확인 한 후 위코드를 조작해 작성을 진행한다.



*/