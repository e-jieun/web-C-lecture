
// * 기명함수방식, 함수 선언 방식

function textMachine(startValue, endValue, textValue){
  let result = textValue;
  for(let i = startValue; i <= endValue; i++) {
  }
  return result;
}

// ? return이 매우 헷갈리니 주의하여 확인 할 것


console.log(textMachine(1,2,"콘솔"));

function a() {
  console.log('test');
  return "메롱";
}
a();
console.log(a());

function b (first, second) {
  if(typeof first === "number") {
    // "타입체크"
    return first - second;
  } else {
    console.log("첫번째 매개변수타입이 숫자가 아닙니다.");
  }
}

console.log(b("바보",2));




