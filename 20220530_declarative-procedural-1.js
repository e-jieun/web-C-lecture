/*
  pseudo 1. 숫자가 몇개든 모두 더해주는 기계를 만들고자 한다.
  pseudo 2. 웹서비스에서 필요한 모든 숫자를 '누산(accumulration)' 하는 과정이 많다.
  
  ? 자바스크립트가 지원하는 배열메서드 중 array.reduce()를 활용하면 간단히 처리가 가능하나,
  ? 배열인지, 그리고 배열의 원소들이 숫자가 맞는지 여부들을 검사하는 과정을 함수로 담았다.
  
  ? 첫번째 함수인 sumMakerOne()이라는 함수는 자바스크립트 ES6가 지원하는 여러가지 편의성 작성법 및 메서드를 모두 활용한 '선언형 방식의 프로그래밍' 이다.
  ? 특징은 : 코드가 매우 짧고 간결하기 때문에 생산성이 매우 높지만, 약속된 함수를 많이 쓰기때문에 기반지식이 필요하다.


*/
// declarative programming : 선언형 프로그래밍
function sumMakerOne(...args) {
  if(Array.isArray(args)) {
    let numberDatas = args.filter(element => typeof element === "number");
    return numberDatas.reduce((prev, cur) => prev + cur);
  }
}
console.log(sumMakerOne(1,2,3,4,5,6,7,8,9,10));



// procedural programming : 명령형 프로그래밍
function sumMakerTwo(...args) {
  let tempArr = [];
  let tempResult = 0;
  if(Array.isArray(args) === true) {
    for(let i = 0; i < args.length; i++) {
      if(typeof (args[i]) === "number") {
        tempArr[tempArr.length] = args[i];
      }
    }
    for(let i = 0; i < tempArr.length; i++) {
      tempResult = tempResult + tempArr[i];
    }
  }
  return tempResult;
}

console.log(sumMakerTwo(1,2,3,4,5,6,7,8,9,10));


