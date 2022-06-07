const dummy = `<li id="num-1">test</li>`;

console.log(dummy.indexOf(">"));
console.log(dummy.lastIndexOf("<"))

let openTag = dummy.slice(0, dummy.indexOf(">")+1);
console.log(openTag);
let closeTag = dummy.substring(dummy.length, dummy.lastIndexOf("<"));
console.log(closeTag);

