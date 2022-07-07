let exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*
  ? exampleArray 배열
  * 원소의 값은 의미있는 값은 아니며,
  * 일련의 순서가 정해진 배열의 원소들을 역순(오름차순, 내림차순)으로 순서를 변경하는
  * 여러가지 방법을 아래의 예시로 소개

*/
let firstArray = [1,2,3,4,5,6,7,8,9,10];
let reverseFirstArray = firstArray.reverse();
// console.log(reverseFirstArray);
/*
  ? .reverse()
  * reverse() 함수는 말그대로 '역순'을 목적으로 만들어 놓은 자바스크립트의 선언형 배열 메서드이다.
  * 위의 전제에서는 가장 간단하고 명쾌하게 해결할 수 있는 방식이지만,
  * 다른 조건이 붙을 경우 사용하기 어려워지는 수가 생긴다는 점을 유의해야한다.
*/
let secondArray = [1,2,3,4,5,6,7,8,9,10];
let sortSecondArray = secondArray.sort((a,b) => {return b-a});
// console.log(sortSecondArray);
/*
  ? .sort()
  * .sort()는 .reverse()보다 조금더 제어가 가능하다.
  * a, b 라고 새겨져있는 매개변수는 배열의 순서(첫순, 끝순)를 의미하는 특이한 매개변수이고
  * 위의 예제에서는 b - a 라는 명령으로 .reverse() 효과(역순)을 내도록 처리했다.
  * 직접 처리 했기때문에 반대로 처리하는 것도 가능한 여지가 있다.
  * 매우 자주 사용하는 메서드 중 하나
*/
let thirdArray = [1,2,3,4,5,6,7,8,9,10];
let tempHandleThirdArray = [];
for(let i = thirdArray.length - 1; i >= 0; i--) {
  tempHandleThirdArray.push(thirdArray[i]);
}
// console.log(tempHandleThirdArray);
/*
  ? for()
  * 명령 방식으로 반복횟수를 제어한 조건문을 유의깊게 볼 것
  * 최댓값에서 최솟값으로 감소하면서 반복을 진행한다.
  * tempHandleThirdArray라는 별도의 배열에 옮겨 담은 개념이며, 매우 자주 사용하는 핸들링용 배열이자, for()문의 개념이다.
  * 배열이기 때문에 .forEach()로도 얼마든지 가능하므로, .forEach()를 사용하여 동일한 방식을 구현해 볼 것
*/
let fourthArray = [1,2,3,4,5,6,7,8,9,10];
let fourthTempHandle = [];
fourthArray.filter((value) => {
  if(value <= fourthArray.length) {
    fourthTempHandle.unshift(value);
  }
});
// console.log(fourthTempHandle);
/*
  ? .filter() 
  * 배열을 순회하면서 '조건'을 사용해야 할때 사용하는 배열 전용 반복문이다.
  * forEach()를 사용하고 그 알고리즘으로 if()문을 사용하는 것을 대체한다.
  * 조건식이 참인경우 무엇을 한다. 라는 것이 메서드 이름(.filter) 자체에 내포되어있기 때문에
  * .filter() 메서드는 무언가 조건에 부합하거나 부합하지 않는 경우를 '분기(나눌때)' 명시적으로 사용하는
  * 자바스크립트 주요 함수중에 하나다.
  * 이를테면 다음과 같다.
  * " 어라 .filter()가 보이네? 무언가 조건식을 사용했겟구나. "
*/

/*
  todo : 제작자가 가져갈 관점
  
  ? 같은 용도의 목적을 가진 제어가 정해져 있다면,
  * '어떤 방식으로든' 구현해낼 수 있다는 점이다.
  * 한가지의 '가장 편리한 방식'만 고수한다면 응용력 면에서 한계를 드러내는 것이 코딩 마일리지 이기 때문에,
  * 다양한 메서드와 다양한 방식을 강구해보면서 다른 제작자는 
  * 해당 목적을 어떻게 해결하였는지,
  * 더 좋은 방식은 없는지,
  * 순간 불편하지만 '다시 확인하기에 좋은 방식' 인지 등등
  * 사람의 말처럼 다양하게 사용해보는 연습을 하는 것을 매우 크게 권장한다.
  * 







*/