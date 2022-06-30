const objectLiteral = {
  name : '이것은 제작자가 일일히 작성한 객체',
  explainOne : '객체 한개를 직접 만든 것',
  explainTwo : '여러개의 객체를 만들때는 무한정 복사 붙여넣기를 해야한다',
  explainThree : '이런 방식이 익숙하지만 데이터로서는 사용하기 어렵다. (매번 값이 바뀔 때마다 다시 만들어줘야 하기 때문',
  callName : '이렇게 작성 하는 것을 객체 리터럴(object literal) 이라고 부른다. 자바스크립트가 유독 특이하고 편리하다.'
}
/* 
  ? objectLiteral이라는 이름의 객체

  work .1 객체의 효용성
  * 코드가 길어지면 길어질수록 사람이 해결하기 어려운 수준의 방대한 데이터를 다루는 것에 한계점을 느끼기 시작한다.
  * 너무 많은 함수와 너무 많은 데이터들이 엉켜있다보면 점점더 작성하는 조건이 까다로워지는 수순을 밟게 된다.
  * 이럴때 객체는 제작자의 '도구' 로서 매우 유용하다.
  * 옷장을 비유하면,
  * 겨울철에 입는 옷은 겨울옷 옷장에 넣어 보관,
  * 여름철에 입는 옷은 여름옷 옷장에 넣어 보관,
  * 
  * 한다면, 여름에는 굳이 겨울철 옷장을 열어볼 필요가 없게 될 것이다.
  * 반대로 겨울에는 굳이 여름옷 옷장을 열어볼 필요가 없게 된다.
  * 
  * 다시말해 '기능이나 데이터 별로' 객체에 조리있게 담아 정리하면,
  * 제작자는 감당하기 힘든 코드도 '옷장이 몇개있는지' 만 알면 나머지는 찾을 수 있기 때문에 부담이 줄어든다.
  * <div> 태그의 객체 키값 목록을 도저히 외울 수는 없지만,
  * 어디에 있는지는 알고 있기때문에 언제든지 꺼내올 수 있다.
  * '조회'하는 능력만 필요하다.
  * 코드를 인식하며 작업하기 부담스러워 질때는 바로 이 객체를 적극 연구할 필요성이 있다.
  
  work .2 objectLiteral 객체
  * 너무나 익숙하고 많이 본 구조 이다.
  * 키를 만들어 원하는 값을 잘 정돈해 넣어놓는다.
  * 함수를 넣어 놓으면 '메서드'라고 이름이 바뀔 만큼
  * 다양한 코드 사용처에서 객체는 그 뿌리를 두고 안보이는 부분에서 작동하고 있다.
  * HTML 마크업 작업할 때 console.dir() 작성을 수도없이 하는 이유는 그것이 다 객체타입이기 때문이다.
  * 리터럴(literal) 이라는 말에 주목할 필요가 있다.
  * '직접 작성했다' 라고 해석할 수 있으며, 위의 객체는 제작자가 직접 모두 작성한 객체이다.
  * 즉 제작자가 만든다는 것은 자동화가 이루어지지 않았다는 뜻이 된다.
  * 자동화 = 프로그래밍의 목적
  * 개발자들이 사용하는 어휘를 빌리면 다음과 같다.
  * "정적인 방식으로 객체리터럴을 작성했다"
  * 라고 말한다.
  * 동적으로 객체를 만드는 것은 무엇일까?
  * 바로 아래에 작성된 '생성자 함수' 이다.
  * 이것을 붕어빵틀과 붕어빵에 비유하면서 정확한 명칭은
  * '생성자함수(constructor function)'(붕어빵틀), '인스턴스(instance)'(붕어빵) 이라고 부른다.

*/
class Element {
  constructor(tagName, id = '', classList = [], children = [], parent = null) {
    this.tagName = tagName;
    this.id = '';
    this.classList = [];
    this.children = [];
    this.parent = null;
    this.style = {
      width : '',
      height : '',
      backgroundColor : '',
      color: ''
    }
  }
}

/*
  ? class Element {}
  * 여기서 작성된 class는 CSS에서 사용하는 class와 다른 뜻임을 주의 할 것
  * 생성자 함수를 '선언'하는 방식이며 최신문법 중 하나이다.
  * 일반적으로 생성자 함수는 '처음 만들때 공들여 만드는' 방식이므로 로직을 변경하는 일보단, 새로 클래스를 만드는일이 훨씬 더 많다.
  * 따라서 개발자들 관습적으로는 건들이지 말라는 뜻을 내포한 파스칼케이스(첫글자가 대문자인)로 이름을 작명한다.
  * 
  * 함수구조와 약간 다른 부분이 있는데 Element(작명한 이름) 옆에 소괄호 없이 바로 중괄호(스코프)를 붙이는 방식이 그것이다.
  * 생성자 함수도 함수이기때문에, 매개변수, 리턴 등 함수의 구조를 따를 공간이 필요한데,
  * 이는 정해져 있는 함수이름 constructor() {} 라는 함수가 그 역할을 수행한다.
  todo : constructor() {} <- class 에서 컨스트럭터 함수 이름은 고정이다(따로작명할 수 없다)

  * constructor : 직역하면 구조화, 건설, 빌드 제작 의 뜻을 가지고 있다
  * 일반 함수와 다르게 constructor 자체의 이름을 사용하지는 않는다. -> Element로 대체된다.
  * constructor()의 매개변수에 객체의 데이터가 될 매개변수를 설정한다.


  ? 위 class Element 생성자 함수 구조
  * 키와 값을 확인하면 익숙한 데이터를 확인할 수 있다.
  * 간단하게 몇줄로만 작성하였지만, 이것이 HTML 태그를 만들어내는 '생성자 함수'를 따라한 사례이다.
  * 다시말해 HTML 태그를 사용하면 위와 같은 생성자 함수가(붕어빵틀)이 실행되어 인스턴스가 만들어지고, 만들어진 인스턴스를 '브라우저'가 활용해 랜더링(출력) 한다.
  * 사고를 확장하면 나만의 태그를 만들 수 도 있을 것이다.
*/

class Example {
  constructor(parameter) {
    this.params = parameter;
    this.name = 'constructor function';
    this.koreaName = '생성자 함수';
    this.example = '붕어빵 틀 역할을 하는 함수';
    this.returnValue = '생성자 함수를 호출하면 붕어빵 같이 똑같은 객체가 자동으로 만들어집니다'; 
  }
}

/*
  ? class Example 
  * 생성자 함수는 HTML 처럼 '미리 만들어진' 내장 생성자 함수가 존재하고,
  * 위와 같이 '필요에 따라' 제작자가 직접 만드는 커스텀(사용자정의) 방식이 존재한다.
  * 한발 더 나아가서 자바스크립트 생태계에 존재하는 수많은 라이브러리들이 이러한 생성자 함수를 활용한 방식을 취하고 있다. 
  * 자바스크립트에 '시간을 확인할 수 있는' 내장 생성자 함수 DATE를 new Date() 라는 방식으로 '인스턴스'를 하나 만드는 방식을 취하고 있다.

*/

function OldElementMaker(tagName, id = '', classList = [], children = [], parent = null) {
  this.tagName = tagName;
  this.id = '';
  this.classList = [];
  this.children = [];
  this.parent = null;
  this.style = {
    width : '',
    height : '',
    backgroundColor : '',
    color: ''
  }
}
/*
  ? OldElementMaker() 함수의 의미
  * 이전 버전의 자바스크립트에서는 class 생성자 함수가 존재하지 않은 엉성한 구조를 가졌었기에
  * 위와 같은 방식(일반 함수방식) 으로 생성자 함수를 제작하곤 하였다.
  * 결과적으로 위에 작성한 class Element{} 와 완전히 동일한 기능과 역할을 한다.

*/

const divElement = new Element("div");
const sectionElement = new Element("section");
const footerElement = new Element("footer");

// todo : 가짜 태그지만, 위에서 제작한 생성자 함수를 기반으로 새로운 인스턴스를 const 상수에 담아놓은 예 이다.

const ul = new Element("ul");
console.dir(divElement);
console.dir(sectionElement);
console.dir(footerElement);
console.dir(ul);
// todo : 객체가 마치 붕어빵처럼 찍어져 나와있는 상태이기 때문에 dir(키와 값이들어있는) 구조를 확인할 수 있다.
const li = new OldElementMaker("li");
console.dir(li);
const p = new OldElementMaker("p");

/* 
  ? 언제 생성자 함수를 쓰는게 좋을까?
  * 디자인 작업 부분
  * 관리해야할 함수가 많거나, '함수 자체'를 여러개 조금만바꾸어서 복제해야되는 경우라면 함수를 여러번 작성하기 불편할때 '생성자 함수' 로 '일반 함수'를 커스텀 하면서 제작할 수 있다.
  * 데이터 관리 부분
  * 강의장 학생목록등, 각자 '값'은 다르지만 '항목'은 동일할때 생성자 함수를 통해 빠르게 여러개의 객체를 만들어 낼 수 있다.
  * 객체로 만든 데이터를 -> JSON으로 변환하여 '언어대 언어', '영역대 영역' 간의 데이터 교환도 가능하다.
*/