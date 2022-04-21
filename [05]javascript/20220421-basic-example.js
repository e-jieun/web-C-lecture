// console.log(typeof nuri);
// console.log(typeof text);





// 변수 stringSum이라는 녀석은 변수 nuri 라는 변수 와 text 라는 변수를 앞뒤로 합쳣다. 를 stringSum 변수에 대입했다.


// let nuri = "이누리";
// let text = "을 좋아합니다.";


// let foodObject =  { // 객체가 생겨난 이유
//   chobab:"초밥",
//   guaja:"과자",
//   coffee:"커피"
// }
// 알고리즘, 프로그래밍 하기 따라서 객체,배열, 변수 로 얼마든지, 바꾸어 사용해도 된다.
/*
* 자료 구조 
* 변수에 작명할때 "데이터타입"을 살짝 표시해주는 버릇을 가지면 -> 애둘러 찾을 필요가 없다.
* "nuri는 변수는 foodObject라는 객체의 무언가는 가져다 쓰겟지" -> 예상할 수 있게 된다.
? 값이 별로 중요해지지 않는다.
? 타입이 중요하다.



*/

// console.log(food); 

// let stringSum = `${nuri}씨는 ${food.coffee} ${text}`;
// console.log(stringSum);




let pokemon = ["이상해씨", "이상해풀", "이상해꽃", "파이리","리자드", "리자몽"];
// 배열에는 원소(요소 element), length값 6인 데이터를 -> 변수 pokemon 대입했다.
console.log(pokemon);
console.log(pokemon.length);
// 배열에 키값 중에 길이값을 가져오는 length라는 프로퍼티를 접근했다. getter 
console.log(pokemon[3]);
console.log(pokemon[pokemon.length-1]); // 
// 마지막 값을 -> 길이값의 -1 = 무조건 마지막 원소 
let three = 3;
console.log(pokemon[three]);



let max = `${pokemon[0]} 포켓몬의 최종진화는 ${pokemon[0+2]}`;
console.log(max);





let coffeeArray = [];