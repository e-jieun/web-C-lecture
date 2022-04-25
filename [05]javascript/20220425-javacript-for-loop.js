const arr = ['피카츄', '라이츄', '파이리', '꼬부기', '버터풀', '야도란', '피존투', '또가스'];

/* 

* 배열(array) index : 배열에는 순서가 매겨져 있다. 우리말로 색인이라고 하며, index 라고 통칭한다.
* 배열(array) length : 배열에는 원소의 총 갯수를 뜻하는 length 라는 프로퍼티가 있으며 '언제나' 데이터 타입이 숫자이다.

*/

console.log(`${arr[0]}가 진화를 하면 ${arr[1]}이 된다.`);
console.log(`배열의 총 길이(length)값은 : ${arr.length}이다.`);

for(let i = 0; i < arr.length; i++) {
  if(arr[i] === "꼬부기") {
    arr[i] = "거북왕";
    console.log(arr[i]);
    console.log(`${arr[i]}의 다음 포켓몬스터는 ${arr[i + 1]} 이다.`);
  }
}
