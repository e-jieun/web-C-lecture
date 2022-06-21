import page from './pages/page.js';
/* 
  work. 11 import (가져오기) 된 함수 page()
  ? 완전한 함수는 아니지만, 어떠한 태그컨테이너가 '하나의 함수'가 될 수 있다는 관점으로 모듈화를 진행했다.
  ? page() 함수는 단순히 일련의 문자열을 리턴(반환)할 뿐이지만,
  * 아래의 활용도에 따라 매우 다양하게 쓰임이 생성된다.


*/
window.addEventListener('DOMContentLoaded', function() {
  /*
    work .6 window event
    ? html 문서에서 defer를 사용하였기에 굳이 필요없는 이벤트이나,
    ? defer를 사용하지 못하는 문서의 경우 위와같은 윈도우 이벤트를 달아주는 것이 보통이다.
  
  */
  console.log('DOM load console test');
  // DOM element init
  const root = document.getElementById("root");
  
  const enclosed = (tagName, content) => {
    return `<${tagName}>${content}</${tagName}>`;
  }
  /*
    workr .7 enclosed() 함수
    ? 쌍으로 만들어지는 HTML 태그를 '문자열'로 처리하기 위한 매우 간단한 함수,
    ? 배열 + 문자열 처리  = 문서 제작을 할 수 있기에 매우 중요한 함수이다.
    * array.map();
    * array.reduce();
    * array.join();
    * array.push();
    * '문자열'의 특징 때문에 배열메서드와 상당히 조합 및 확장성이 뛰어나다.
  
  */
  const mainSection = `
    ${page('page-1')}
  `;
  /*
    work .8 mainSection 문자열 변수
    ? 함수를 따로 호출하여
    ? '관리' 하고자 변수로 만들었다.
    * 작업하는데 보기 불편하다면 -> 언제든지 편히 변수로 떼어 사용할 수 있다.

  */
  const _rootContent = `
    <header>
      <ul>
        ${enclosed('li', "test")}
        ${enclosed('li', "test")}
        ${enclosed('li', "test")}
        ${enclosed('li', "test")}
        ${enclosed('li', "test")}
      </ul>
    </header>
    <main>
      ${mainSection}
    </main>
    <footer></footer>
  `;
  /*
    work .9 _rootContent 문자열 변수
    ? 사실상 index.html의 #root 자식으로 활용되는 html 이라고 봐도 무방한 매우 중요한 변수 이다.
    ? 관습적으로 중요한 데이터는 _언더바를 붙이거나(첫글자로 특수기호를 사용하는것은 금지되어있으나 언더바 와 달러표시는 허용한다)
    ? 대문자로 표기하는 관습이 있다.

    * 데이터를 보았을때 문자열 사이사이에 함수나 변수들이 끼어들어가 있는 구조를 확인할 수 있으며, 연산이 가능한 프로그래밍(문자열제어) 방식을 최대한 끌어올리고자 하는 방책이다.
    * 이러한 방식이 "SPA" 방식의 기초가 된다.
    * <ul></ul> 자식으로 enclosed() 함수가 여러번 실행된 것을 볼 수 있다.
    * 이러한 방식은 옳지 않지만 예제에서 작성하지 않은 '반복'문을 활요한다면 어떠한 알고리즘에 의해 
    * 필요한만큼 <li></li> 태그를 생성할 수 도 있을 것이다.
  
  */
  root.innerHTML = _rootContent;

});// DOMContentLoaded
