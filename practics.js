function stringCombain(a, b) {
  return a + b;
}
function consoleLoop(string, count) {
  for(let i = 0; i < count; i++) {
    console.log(string);
  }
}
function one(ipgoo, ipgootoo, count) {
  let strings = stringCombain(ipgoo, ipgootoo);
  consoleLoop(strings, count);
  return "메롱";
}

one("<div>", "</div>", 5);
