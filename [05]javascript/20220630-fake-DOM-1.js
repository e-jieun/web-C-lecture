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

const divElement = new Element("div");
const sectionElement = new Element("section");
const footerElement = new Element("footer");
const ul = new Element("ul");
console.dir(divElement);
console.dir(sectionElement);
console.dir(footerElement);
console.dir(ul);
const li = new OldElementMaker("li");
console.dir(li);
const p = new OldElementMaker("p");

