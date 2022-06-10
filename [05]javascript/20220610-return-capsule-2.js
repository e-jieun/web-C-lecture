// work 1. 구구단을 만들고자 한다.
// work 2. 이왕이면 무슨 숫자를 넣어도 '원하는 만큼 곱해지는' 것을 만들고자 한다.
// pseudo : 약식상 함수마다 넘버링을 붙여 설명 예정


function one() {
  for (let i = 1; i < 10; i++) {
    console.log(1 * i); //? 
  }
}
one();
// * 전통적인 구구단을 구현하는 기본형 함수 one()
// * 일반 for()문을 그대로 쓰는 것과 달리
// * 필요할 '때' 만 호출해서 사용할 수 있다.

// * 단점은 1단(구구단)밖에 할 수 없는 한계가 있다.

function two(number) {
  for (let i = 1; i < 10; i++) {
    console.log(number * i);
  }
}
two(123);
// * 매개변수를 만들어 활용한 기초적인 구조의 함수 two()
// * 임의로 만들어 지은 이름 number로 인해 재료만 넣어준다면 언제든지 구구단을 해낼 수 있다.
// * 하지만 횟수를 늘리거나 시작점을 바꾼다거나 하는 것에는 분명한 한계점이 드러난다.

function three(number, count) {
  for (let i = 1; i < count; i++) {
    console.log(number * i);
  }
}
three(1023, 20);
// * 매개변수를 두개 만들어 넣어준 함수 three()
// * 원하는 곱셈을 하고자 하는 피연산자와 횟수를 관장하는 count 라는 매개변수가 조화되어
// * 원하는 만큼, 또 원하는 갯수만큼 곱셉을 진행 시킬 수 있다.

function four(number, count, index) {
  for (let i = index; i < count; i++) {
    console.log(number * i);
  }
}
four(10, 10, 4);
// * 시작점까지 제어할 수 있는 함수 four()
// * 시작점과 끝점(구구단을 진행할)을 설정할 수 있기 때문에 함수 one()과는 차원이 다른 유연함을 가지고 있다.
// todo : 함수가 유연하다라는 뜻은 곧 버그(예기치못한 동작)가 발생할 여지가 높아진다.
// ? four() 함수의 index는 count 보다 값이 높으면 제대로 동작하지 않는다.


function five(number, count, index) {
  if (count > index) { // * count 값이 index 보다 커야만 동작하게끔 버그를 예방했다.
    for (let i = index; i < count; i++) {
      console.log(number * i);
    }
  } else {
    return console.error('not working');
  }
}

five(3, 2, 10);//?
// * 유연해진만큼 함수의 기능 내부에 '판단'을 시키는 제어가 필요하다.
// * 코드가 길어지는 이유와 같이 맞물려있지만 가장 '안정적' 인 코드를 작성해야 하는 실무에서는 '타입'이나 필요한 
// * '값'을 제어하는 것에 많은 정성을 들인다.

function six(number=1, count=10, index=0) {
  if(count> index) {
    for(let i = index; i < count; i++) {
      console.log(number * i);
    }
  }
}
six();
// * 매개변수 자리에 디폴트 파라미터(기본값 매개변수)를 지정해준 six()
// * 함수호출에서 기본값이 공통된 경우에도 사용할 수 있는 유연함이 한가지 더 늘었다.

function valueChecker(a, b) {
  if(a>b){
    return a, b;
  } else {
    console.log("need more a value");
  }
}

function seven(number=1, count=10, index=0) {
  valueChecker(count, index);
  for(let i = index; i < count; i++) {
    console.log(number * i);
  }
}
seven(2,40,33);
// * if()제어문이 따로 떼어진 함수 seven()
// * 함수내에서는 무조건 위에서부터 아래로 읽어 내려가기 때문에
// * 따로떼어놓은 valueChecker()라는 함수가 정상적으로 동작하지 않으면 (else) 제대로 동작하지 않는다.
// todo : 하나의 예시로만 설명을 하기때문에 코드가 두배이상 늘어난 것처럼 보이지만 ★재활용★ 할수록 코드는 기하급수적으로 짧아진다.

// todo : 코드가 짧으면 짧아질수록 '독해'하기 어려워진다. 대신 그만큼 생산성이 올라간다.
// todo : 적정한 선에서의 도입이 필요하지만, 거의 대부분의 경우 활용할 충분한 가치가 있다.

const eight = (number, count, index) => {
  count > index ? true : console.log('err..');
  for(let i = index; i < count; i++) {
    console.log(number * i);
  }
}
eight(5,3,1);
// * 권장되는 방식 "익명함수" -> 식별자 사용 : 함수리터럴 eight()
// * 극단적으로 짧고, 매개변수가 많아 한번에 독해하기 어렵지만,
// * 필드의 개발자들의 입장에서는 나자신과 동료들끼리 주로 사용하는 패턴을 작성하는 경향이 짙기 때문에 
// * 자바스크립트처럼 코드를 얼마든지 짧게 사용할 수 있는 조건에서는 위와 같이 사용하는 경우가 잦다.

/*

 work .1 함수를 만드는 그 작업 당시에는 코드가 쓸데없이 길어지는 경향이 있지만, 
 work .1 사실 압축하는 과정이기때문에 자주사용하는 제어일수록 함수로 만들고 '여러번 호출(재할당)' 하는 것이 매우 경제적이다.
 work .2 특히 규모가 커지면 커질수록 '안전하게 사용할 코드'가 다양하게 필요하기 때문에 필수적이므로
 work .2 함수가 가진 다양성과 함께, 단순한 처리 마저도 함수로 처리하는 연습을 해야한다.






*/