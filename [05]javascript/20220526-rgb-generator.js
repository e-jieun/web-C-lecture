// pseudo 1. rgb()값은 0 ~ 255 의 범위로 지정되어있다.
// pseudo 2. rgb()값은 정수 : integer로만 구성된다.
// pseudo 2-1. integer : 양수, 0, 음수 
// pseudo 2-2. float(부동소수점) : 1.1, 0.5, 223.22 소숫점이 붙은수

// pseudo 3. 문서(element) 높이는 0 ~ 정수로 되어있다. 
// pseudo 3. 문서(element) 높이값은 px이라는 단위의 절대값으로 되어있다.

// pseudo 4. 전체값의 몇퍼센트는 절대값이 얼마인지 값(해)을 내는 공식
// ? let result = (전체 * 퍼센트) / 100;


// pseudo 5. 전체값의 숫자얼마는 백분율로 몇 퍼센트 인지 값(해)를 내는 공식
// ? let result = (숫자값 / 전체값) * 100;


function rgbGeneratorReturnNumber(elementHeightNumber, elementOffsetHeightNumber) {
  let getpercentageValue = Math.round((elementHeightNumber / elementOffsetHeightNumber) * 100);
  // ? 현재마우스 위치 높이값 나누기 요소 전체 높이값 -> 나온값 곲하기 100 -> 나온값 반올림 -> 정수값 도출
  console.log(getpercentageValue)
  console.log(`현재 마우스의 높이값은 타겟요소의 전체 높이중 ${getpercentageValue}%에 해당합니다.`);
  
  let getRgbColorValue = Math.round((255 * getpercentageValue) / 100);
  // ? rgb()단위의 최대값 255 곱하기 마우스 위치값 퍼센트 -> 나온값 나누기 100 -> 나온값 반올림 -> 정수값 도출
  console.log(getRgbColorValue)
  console.log(`현재 마우스의 위치높이값을 rgb() 색깔값으로 환산하면 ${getRgbColorValue}값 입니다.`);
  return getRgbColorValue;
}

rgbGeneratorReturnNumber(500, 1080); //?