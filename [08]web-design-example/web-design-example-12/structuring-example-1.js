
// * DOM API
const root = document.getElementById('root');


// todo : 어떤 요소를 클릭하면 클릭한 요소에 맞는 정보가 나타나는 인터렉션
// todo : 착안한 아이디어 data-* 사용자 정의 속성을 이용해 각각 다른 요소들의 '기준점'을 만들어 활용

// pseudo 1. 모든 문서를 동적으로(자바스크립트) 처리하는 방식 채택
// pseudo 2. createElement(), appendChild()와 같은 DOM API(문서전용함수)를 최대한 사용하지않으면서 -> 코드의 복잡도를 낮추는 작업 진행



function ulElement() {
  return (
    `
      <ul>
    
      </ul>

    `);
}
/*
  * return에 소괄호를 사용한 특이점을 제외하면 ulElement() 라는 함수는 결국 리턴에 의해
  * `<ul></ul>` 이라는 html 태그처럼 보이는 '문자열'을 반환한다.
  * 따라서 맨 아래의 root.innerHTML = ``; .innerHTML속성으로 태그가 해석되는 성질을 활용하게 된다.

*/
function sectionElement() {
  return( 
  `
    <section></section>
  
  `);
  // * 마치 마크업하듯이 함수를 사용하는 점을 주목한다.
}



root.innerHTML = `
  ${ulElement()}
  ${sectionElement()}
`;