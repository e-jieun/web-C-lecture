
// * DOM API
const root = document.getElementById('root');
// todo : 어떤 요소를 클릭하면 클릭한 요소에 맞는 정보가 나타나는 인터렉션
// todo : 착안한 아이디어 data-* 사용자 정의 속성을 이용해 각각 다른 요소들의 '기준점'을 만들어 활용

function basicElement(tagName, datasetName, datasetValue, textNode="textNode") {
  // * 복잡해 보이지만 길어지는 if()문을 짧게 처리한 공정일 뿐이다.
  tagName = typeof tagName === "string" ? tagName : console.error("need string type");
  datasetName = typeof datasetName === "string" ? datasetName : console.error("need string type");
  datasetValue = typeof datasetValue === "string" ? datasetValue : console.error("need string type");
  // * 매개변수 tagName, datasetName이 문자열이여야만 작동되게끔 삼항연산자(if()제어문)을 활용하여 특이한 에러가 나지 않게 처리 했다.
  return (
    `
      <${tagName} data-${datasetName}="${datasetValue}">
        ${textNode}
      </${tagName}>
    `);
}
/*
  * return 설명
  * basicElement("ul", "pick", "0") <-- 호출부에 이와 같이 호출 했을때
  * 결과적으로 태그는 아래와 같이 랜더링 된다.
  * <ul data-pick="0">textNode</ul>
  * 따라서 마크업 한 효과를 자바스크립트 파일에서 볼 수 있다.
*/

root.innerHTML = `
  ${basicElement("ul", "pick", "0","ul요소")}
  ${basicElement("section", "pick", "0", "section요소")}
`;
