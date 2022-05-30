/*

todo : 결과적으로 sumMakerOne()함수와 sumMakerTwo()함수는 동일한 기능을 한다.

*/

// ? declarative programming : 선언형 프로그래밍
function sumMakerOne(...args) {
  /*
  function(...arguments) {}
  매개변수 자리에 특이하게 작성된 유형 점세개(...)를 rest parameter 라고부른다.
  * rest parameter = 나머지 매개변수 라고 부르며, ES6최신버전에서 부터 지원하기 시작했다.
  
  * 매개변수 이기때문에 이름은 제작자의 작명법을 따른다. 작성법은 ...이름 이다.
  ? 용도
  * 매개변수의 갯수를 미리 상정하지 못하는경우, 해당 예제와 같이 인수가 얼마나 들어올 지 모르는 경우에 매우 편리하게 사용할 수 있다.
  ? ...restParameter : 나머지 매개변수는 리턴이 배열이기때문에 배열관련 메서드를 마음 껏 사용할 수 있다.
  */
  
  if(Array.isArray(args)) {
    // ? 조건식 : args 매개변수가 배열이면 true
    let numberDatas = args.filter(element => typeof element === "number");
    // ? array.filter 메서드 조건식
    /*
    * 배열의 요소를 매개변수 element라는 이름으로 작명 -> 타입검사를 통해 number 인 요소들을 numberDatas 라는 배열에 대입한다.
    * filter 라는 반복문을 돌며 조건식에 부합하는 원소만 추려져 -> numbersDatas 라는 이름의 변수에 배열 형태로 재조립
    */
    return numberDatas.reduce((prev, cur) => prev + cur);
    // ? array.reduce()메서드 주요 인수
    // ? prev : 이전 원소
    // ? cur : 현재 원소 
    // * 배열의 0번째(첫번째)부터 순회하면서 이전 값과 다음값을 더하는 알고리즘을 리턴한다. (누산)
  }
}
console.log(sumMakerOne(1,2,3,4,5,6,7,8,9,10));



// ? procedural programming : 명령형 프로그래밍
function sumMakerTwo(...args) {
  // ? 위의 함수와 동일하게 rest parameter를 사용했다.
  let tempArr = [];
  let tempResult = 0;
  /*
  ? 변수 두개 tempArr, tempResult 초기화
  ? 아래의 알고리즘에서 가공할 데이터를 임시로 담아두고자 메모리에 변수자리를 만들었다.
  */
  if(Array.isArray(args) === true) {
    // ? 조건식 위의 선언형 조건식과 같은 조건식이지만 === "일치연산자"를 통해 명시적으로 true와 같다면 이라는 논리로 접근했다.
    for(let i = 0; i < args.length; i++) {
      // ? 기본제어문, 혹은 명령형 제어문인 for()문을 통해서 몇개인지는 모르지만 배열인 것은 확실한 args 매개변수를 순회(loop) 시켰다.
      if(typeof (args[i]) === "number") {
        tempArr[tempArr.length] = args[i];
        /*
        ? tempArr[tempArr.length] : 임시로 만든 배열의 길이값은 원소가 없기때문에 0이다.
        ? 하지만 for()문으로 인해 순회하면서 length 값이 실행할 때마다 늘어나기때문에 사실상 마지막원소를 이야기한다.
        ? i번째의 원소가 number 라는 것이 참이라면 tempArr의 마지막원소에 매개변수의 배열 i번째값을 모두 대입한다.

        */
      }
    }
    //? 위의 for()문이 실행완료되면 아래의 for()문이 실행된다.
    for(let i = 0; i < tempArr.length; i++) {
      // ? 임시로 재조립한 tempArr의 길이값만큼 순회한다.
      tempResult = tempResult + tempArr[i];
      // ? 위에서 초기화한 tempResult 라는 변수값과 + 숫자 타입의 원소가 확정인 tempArr[i] 값이 더해서 tempResult에 다시 대입된다.
      // * 결과적으로 누산된다.
    }
  }
  return tempResult;
  // ? 위의 for()문이 종료되면 모두 합해진 값을 담은 tempResult가 리턴(반환) 된다.
  // * 최종적으로 위의 두개의 함수 리턴타입은 한개의 숫자이다.
}
console.log(sumMakerTwo(1,2,3,4,5,6,7,8,9,10));


