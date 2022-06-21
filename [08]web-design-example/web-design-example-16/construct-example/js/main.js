import page from './pages/page.js';
window.addEventListener('DOMContentLoaded', function() {
  console.log('DOM load console test');
  // DOM element init
  const root = document.getElementById("root");
  
  const enclosed = (tagName, content) => {
    return `<${tagName}>${content}</${tagName}>`;
  }

  const mainSection = `
    ${page('page-1')}
  `;

  
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



  root.innerHTML = _rootContent;

});// DOMContentLoaded
