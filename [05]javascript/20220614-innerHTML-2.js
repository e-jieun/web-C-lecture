const pokemonArray = ["피카츄", "라이츄", "파이리", "꼬부기", "버터풀", "야도란"];

const htmlEscape = str => [...str].map(c => c === '<' ? '&lt;' : c === '&' ? '&amp;' : c).join('');
const enclosed = (tag, content) => `<${tag}>${content}</${tag}>`;

const list = enclosed("ul", pokemonArray // No 1
  .map(htmlEscape) // No 2
  .map((index) => enclosed("li", index)) // No 3
  .join("") // No 4
);

console.log(list);
// -----------------------------------------------------------
/*
  work .1
  * const list = enclosed("태그이름", "만들고싶은 내용");
  pseudo 1. 기본 구조는 위와 같은 점을 확인 할 것
  work .2
  * .map(htmlEscape)
  pseudo 2. "<", "&" 와 같은 문자열을 제대로된 특수 기호로 처리(술어 : 매핑한다고 한다)
  work .3
  * .map((index) => {enclosed("li", index)});
  pseudo 3. 배열의 내용물갯수 만큼 enclosed() 함수 실행
  pseudo 3-1. enclosed("li", index); 배열의 내용물로 구성된 <li> 태그</li> 생성
  work .4
  * .join("");
  pseudo 4. 구분자는 ""(공백없음)으로 모든 배열의 원소를 하나의 문자열로 합침

*/

