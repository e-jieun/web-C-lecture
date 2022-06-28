const subject = ["피카츄", "라이츄", "파이리", "꼬부기", "버터풀", "야도란", "피존투", "또가스"];
const directObject = ["사과나무", "텀블러", "단무지", "커피", "연필", "에디터"];
const verb = ["먹었다", "마셨다", "놀았다", "졸았다", "잡았다", "좋아한다", "싫어한다", "애정한다", "놓쳤다", "흘렸다"];

function isEndWithConsonent(koreaString) {
  const finalCharCode = koreaString.charCodeAt(koreaString.length - 1);
  const finalConsonantCode = (finalCharCode - 44032) % 28;
  return finalConsonantCode !== 0;
}

function appendEulReul (koreaString) {
  if(isEndWithConsonent(koreaString) === true) {
    return koreaString + "을";
  } else {
    return koreaString + "를";
  }
}

function appendEga (koreaString) {
  if(isEndWithConsonent(koreaString) === true) {
    return koreaString + "이";
  } else {
    return koreaString + "가";
  }
}

function makeSentence(subject, directObject, verb) {
  let randomValueArray = [];
  for (let i = 0; i < arguments.length; i++) {
    let getRandomInt = Math.floor(Math.random() * (arguments[i].length - 0));
    randomValueArray.push(getRandomInt);
  }
  return `${appendEga(subject[randomValueArray[0]])} ${appendEulReul(directObject[randomValueArray[1]])} ${verb[randomValueArray[2]]}`;
}

console.log(makeSentence(subject, directObject, verb));