function rgbGeneratorReturnNumber(elementHeightNumber, elementOffsetHeightNumber, rgbMinValue = 0, rgbMaxValue = 255) {

  // ? rgbMinValue = 0; 값이 있는 parameter(파라미터)?
  /*
  * 매개변수 중에 위와 같이 값이 이미 대입되어있는 매개변수를 발견할 수 있다.
  * 이러한 유형을 "defalut parameter" 즉 : 매개변수 기본값 방식이라고 부르며
  * 동작원리는 "매개변수에 인수(argument)를 따로 지정해주지 않으면 기본값을 사용한다"
  * 라는 뜻이다. 
  * 
  * 실제 하단의 호출부분을 확인 하였을때 첫번째, 두번째 매개변수는 있지만 세번째 네번째 매개변수는 존재 하지 않는다.
  * 동작상으로 인수로 들어온 값이 없으니 기본값을 사용해 처리된 예이다.
  
  * 이러한 개념에서 매개변수 각각의 이름(elementHeightNumber와 같은것)은 사실 개발자를 위한 식별용인 개념이고, 본체로는 다음과같다. 
  */

  console.log(arguments[0]);
  // ? arguments라는 배열을 만든적이 없지만 조회하면 해당 부분에 값이 들어온것을 확인 할 수 있다. 이러한 것을 이터레이터(iterator): 반복자 라고 부르며 매우 까다로운 내부 동작이 안에 숨어들어있다.
  // ? 이터레이터의 개념보다는 아래의 개념으로 익히기를 권장한다.
  // ? 매개변수를 여러개 만들어 사용하면 " 어떤 데이터 공간에서 arguments라는 이름의 배열이 생성된다. " -> 로 이해하는 것을 권장
  /*
  즉 위 4개의 파라미터(매개변수)는 다른이름이 존재한다.
  */
 console.log(arguments[0]);
 console.log(arguments[1]);
 console.log(arguments[2]);
 console.log(arguments[3]);

// * 매개변수 인덱스 상 세번째 네번째(함수 호출에 값을 넣지 않았지만 매개변수 만들때 기본값으로 넣어줌) 가 undefined 이라는 것을 유심히 볼 것

  let getpercentageValue = Math.round((elementHeightNumber / elementOffsetHeightNumber) * 100);
  let getRgbColorValue = Math.round((rgbMaxValue * getpercentageValue) / 100);
  return getRgbColorValue;
}

rgbGeneratorReturnNumber(500,1080); //?