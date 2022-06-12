
// work .1 코드 가독성을 위해 각각의 기능 modify 진행
import menuMaker from "./menuMaker.js";
import bodySectionMaker from "./bodySectionMaker.js";
import { anchorItems, colorArr } from "./databox.js";
// work .2 현실 적인 DOM 구축은 아래의 rootChild 변수에 담긴다.
const rootChild = `
  <ul id="menu-container">
    ${menuMaker(anchorItems, "li", "menu")}
  </ul>
  ${bodySectionMaker(anchorItems, "section", "menu")}
`;
// work .3 중심이 되어줄 root 요소 식별
const root = document.getElementById('root');
window.addEventListener('load', function() {
  this.document.body.style.padding = 0;
  this.document.body.style.margin = 0;  
  root.innerHTML = rootChild; // ? DOM constructuring
  // styling
  const sections = Array.from(this.document.getElementsByTagName('section'));
  sections.forEach((value, index) => {
    value.style.width = "100vw";
    value.style.height = "100vh";
    value.style.backgroundColor = colorArr[index];
    value.style.display = "none";
  });
  const menuContainer =this.document.getElementById('menu-container');
  menuContainer.style.listStyleType = "none";
  menuContainer.style.position = "fixed";
  menuContainer.style.top = "50%";
  menuContainer.style.right = "0";
  menuContainer.style.transform = "translate(-20%, -50%)";
  const menuItems = Array.from(menuContainer.children);
  this.addEventListener('hashchange', function() {
    const hashData = location.hash.substring(1);
    sections.forEach((value) => {
      let getIdData = value.id;
      if(getIdData === hashData) {
        value.style.display = "block";
      } else {
        value.style.display = "none";
      }
    });
  });
});






