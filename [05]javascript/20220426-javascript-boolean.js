
let statusValue = true;
// ? 불리언 타입으로 값을 정한 후, statusValue 라는 변수에 대입했다.

let valueOne = 3450;
let valueTwo = 2203;
// ? 임의의 천단위의 숫자변수 값을 정했다.

function statusValueHandler(varOne, varTwo) {
  //? 여러번 사용하고자 함수화(캡슐화) 시켰다.
  //? 매개변수를 두개 만들어서 아래의 알고리즘 영역에 연산시키고자 한다.
  
  let result = (varOne + varTwo) / 2;
  //? 특별한 의미는 없으며 덧셈 후 나눗셈 2를 한 값(얼마가 나올 것인지는 궁금하지 않다)을 변수 result 라는 값에 대입했다.
  
  
  console.log(result);
  //? 값이 어떤지 간단하게 확인했다.

  if(result > 2000) {
    // todo : 설정한 변수 result가 무슨값인지는 모르겠지만, 숫자값 2000 보다 크다면 참(true)
    statusValue = false;
    console.log(statusValue);
  } else {
    statusValue = true;
    console.log(statusValue);
  }
  return result;
  //? return 즉 돌려주는 값을 변수 result를 돌려주는 것으로 했다.
  //? 함수에서 나오는 최종값은 result 뿐이다. 위의 알고리즘은 실행만 하기 때문에
  //? 실행한 것과 vs 값을 구분해야된다.

  //? 실행한 알고리즘 : 무언가 더하고 나눈뒤 if문으로 제어를 했다.
  //? 뱉어낸 값 : 얼마가, 무엇인지는 모르겠지만 변수로 설정했던 result 라는 변수가 가리키는 값이 함수라는 기계의 반환값(리턴값);
}

statusValueHandler(valueOne, valueTwo); //?
console.log(statusValue); //?
statusValueHandler(1524, 2012);//?
console.log(statusValue); //?
//console.log(result);
// todo : 바로위의 행 console.log(result)를 주석처리 했는데, 주석을 제거한 후 실행 시켜보면 에러가 나타나는것을 확인 할 수 있다.
// ? : 함수 안에서 생성된 변수는 절대로 함수 밖에서 조회할 수 없다.
