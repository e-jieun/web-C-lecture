let A = 1;
let B = A;
let F = 1;

console.log(A === F);
console.log(B === F);

console.log("변수 B가 가리키는 값은 : " + B);
B++;
console.log("변수 B변수가 가리키는 A를 숫자 1만큼 증가 시켰습니다. 그 값은 :" + B);
console.log("변수 A가 가리키는 값은 : " + A);
/*
  ? 초기화한 변수 해석
  * A : 변수 A는 숫자 1을 대입했다.
  * B : B는 변수 A '를' 대입했다.
  * B변수 -> A변수 -> 1 
  * B = 1;
  * A = 1;
  * 이 아님을 주의하여 확인한다.
  * 변수 B를 증가시키면 A가 가리키는 값이 증가되는지 확인해보면
  * 변수 A는 그대로 1이다.
  * 변수 B는 1이 증가된 2가 되어있다.
  * 
  * 이러한 방식이 구성되어있는 데이터 타입을 '원시값', '원시타입', 'primitive type' 이라고 부른다.
  * 개념이 매우 모호한 부분이기 때문에 아래의 사례를 비교해서 확인 할 것
*/

let C = [1, 2, 3, 4];
/* 
  ? C 변수는 원소를 네개 가지고 있는 배열이다. 



*/
let D = [...C];
/*
  ? [...C]
  * ...(점세개) 전개 연산자 (spread operator)를 활용하여 배열 C에 있는 모든 원소를 배열 D에 담았다.
*/
let Dstatement = (array) => {
  let arrayData = [];
  array.forEach(element => {
    arrayData.push(element);
  });
  return arrayData;
}
let dValue = Dstatement(C);//?
/* 
  ? dValue = Dstatement()
  * 위 전개 연산자를 풀어쓴 원형이다.
  * 기존의 배열을 하나씩 임시 배열에 '도로 담아' 넣었다.
  * 의미가 없는 작업 같아보이지만 아래의 console.log()를 확인하면 놀라운 결과를 확인할 수 있다.
*/
console.log(C === dValue);
/*
  ? C와 dValue 라는 배열은 모두 같은 원소 같은 배열임에도 불구하고
  ? 비교 연산을 했을때 false, 즉 "같지 않다"라는 값을 받아온다.
  * 이것은 자바스크립트의 버그가 아닌 데이터를 다루는 중요한 개념중에 하나이다.
*/

let E = C;
console.log(E);
console.log(C);
console.log( E === C);
/*
  ? 변수 E는 C를 가리켯다.
  ? 각각의 변수를 조회해보면 데이터가 같다.
  * 위의 dValue 처럼 '다른배열에 같은 값을 도로 집어넣은' 변수가 false로 나오는 것과 상반되게
  * E === C 는 true 값을 즉, '같다' 라는 결론을 낸다.
*/

/*

  ? dValue, E , C 변수는 모두 같은 데이터 타입인 배열이다.
  ? dValue, E , C 배열 모두 '동일한' 원소와 갯수를 가지고 있다.
  * 사람의 눈으로 보았을때 세개의 변수는 다를 것이 없지만,
  * 프로그래밍에서는 다르게 판단한다.
  * 
  * 같은 기존의 스마트폰이 있지만, 주인이 다르면 '구분'하는 것처럼
  * 같은 배열, 같은 값이여도 다르게 구분한다는 관점이 프로그래밍 학습에 필요한 개념이다.
*/



C.push(5);
/*
  ? C배열에 .push()를 통해 숫자인 원소를 하나 마지막 원소로 추가했다.
*/

console.log(C);
/*
  ? console.log(C);
  * 값을 추가한 값을 그대로 확인할 수 있다.
*/
console.log(D);
console.log(dValue);
/*
  ? console.log(D);
  ? 다른배열로 복사하여 구성한 변수 D는 .push(5)가 진행되지 않았다.
  * 이전에 복사한 값 그대로를 가지고 있다.
  * dValue와 D는 같은것
*/
console.log(E);
/*
  ? console.log(E)
  * 배열 C를 가리키는 변수 E도 동일하게 값이 추가되어있는 것을 확인할 수있다.
  * E === C는 true, 같기 때문이다.
*/

/*
  ? 배열이 숫자처럼 처리가 안되는 이유?
  * 원시타입인 숫자와 다르게
  * 값의 묶음의 형태를 가진 배열은 '참조값', '참조타입', 'reference type' 이라고 부르며
  * 같은 원소를 가진 배열이어도 '데이터가 자리잡은 지점' 이 다르기 때문에 다른것으로 판별 하는 점이 발생한다.
  * 
  * 배열을 복사하는 경우는 '데이터를 가공'할 때 상당히 빈번하게 일어나는 작업인데,
  * 같은 배열데이터를 E 처럼 이름만 다르게 사용할 수 있고
  * 사람눈에는 같은 배옅데이터 처럼 보이지만, '엄연히 다른' 데이터 처럼 처리할 수도 있다.
  * 
  * 이러한 개념을
  * 얕은복사 (shallow copy);
  * 깊은복사 (deep copy);
  * 라고 부른다.
  * 
  * 여러 표지판이 '한 곳을' 가리킨다 : 표지판을 얕게 복사했다 
  * 
  * 같은 곳처럼 보이는 곳을 각각의 다른 표지판이 가리킨다. = 표지판을 깊게 복사했다
  * 
  * 같은데이터 '처럼' 보이는 것을 유의깊게 주의 한다면, 얕은 복사와 깊은 복사의 구분점을 활용할 수 있게 된다.
*/

  let example = ["피카츄", "라이츄", "파이리", "꼬부기", "버터풀", "야도란"];
  let deepCopyExample = example.map((element) => {
    return element;
  })
  /*
    ? 일련의 이름이 적힌 배열을 초기화 했다.
    ? deepCopyExample 라는 변수는
    ? example배열의 값을 그대로 순회하여 새로운 배열에 집어 넣었다.
  */
console.log(example);
console.log(deepCopyExample);

// todo : 콘솔을 확인하면 읽혀지는 데이터는 모두 동일하다.

console.log(example === deepCopyExample);
// ? 하지만 비교하면 '다르다'고 판단한다.
/*
  ? .map() 메서드에 의해서 '배열을 그대로 사용한 것이 아닌'
  * 새로운 배열에 '같은 값을 옮겨 담는 과정'이 있었기 때문에
  * 기존배열과 새로운 배열은 다르다고 판단한다.
*/

let shallowCopyExample = example;
// ? example 배열을 shallowCopyExample 이라는 변수에 담았다.
console.log(example === shallowCopyExample);
// ? 동일 한 배열데이터를 다른이름의 변수가 가리키는 것 뿐이기 때문에
/*
    * 하나의 데이터 묶음에 '두개의 변수'가 사용되는 흐름이 된다.
    * 결과값은 true 이다.

    * 반면에 deepCopyExample 변수는 기존의 배열을 '다시 옮겨담았기' 때문에 
    * 다르다고 판단한다.
    * 
*/

