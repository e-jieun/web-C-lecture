
// * DOM API
const root = document.getElementById('root');
// todo : 어떤 요소를 클릭하면 클릭한 요소에 맞는 정보가 나타나는 인터렉션
// todo : 착안한 아이디어 data-* 사용자 정의 속성을 이용해 각각 다른 요소들의 '기준점'을 만들어 활용

function basicElement(tagName, datasetName, datasetValue, textNode="textNode") {
  tagName = typeof tagName === "string" ? tagName : console.error("need string type");
  datasetName = typeof datasetName === "string" ? datasetName : console.error("need string type");
  datasetValue = typeof datasetValue === "string" ? datasetValue : console.error("need string type");
  return (
    `
      <${tagName} data-${datasetName}="${datasetValue}">
        ${textNode}
      </${tagName}>
    `);
}


root.innerHTML = `
  ${basicElement("ul", "pick", "0","ul요소")}
  ${basicElement("section", "pick", "0", "section요소")}
`;


const section = Array.from(document.getElementsByTagName('section'));
// * 위에서 innerHTML을 통해 만들어진 <section>태그들을 문서에서 식별했다.
// * 배열메서드를 편하게 사용하기 위해 식별하면서 동시에 '배열'로 데이터를 가공했다.
section.forEach((value) => {
  value.classList.add('pick-item');
});
// * 선언방식(forEach())을 통해서 <section>태그에 CSS인 class, "pick-item"를 부여했다.
// * 명령방식으로 지정하는 것은 명확한 제어가 가능하지만, 코드가 복잡해지는 단점을 피하기 어렵다.
// * 따라서 위와 같이 선언방식으로 해결하면 매우 짧은 코드로도 반복문과 같은 작성이 많이 필요한 사항들을 해결할 수 있게된다.
// * 결과적으로 문서를 많이 다루는 디자이너에게 배열메서드를 통해 맥락을 잡아 낼 수 있다면 작업 피로도가 낮추어지는 효과를 얻는다.