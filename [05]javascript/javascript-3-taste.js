// 해당 파일은 웹 문서가 아니므로 브라우저에서 실행되지 않음
// 눈으로 '영어'를 본다고 생각하고 짐작해 볼 것


const string = "Restaurants in green";
const urlFriendly = "";

for(let i=0; i< string.length; i++) {
  if(string[i] === " ") {
    urlFriendly += "-";
  } else {
    urlFriendly += string[i];
  }
}