/**
 * 객체 방식으로 값을 받아내는 함수
 * @param {number} a 숫자타입
 * @param {number} b 숫자타입
 * @param {number} c 숫자타입
 * @returns a, b, c를 모두 합쳐 숫자 리턴
 * 
 * 
 */
function objParams({a, b, c}) {
  return a + b + c;
}

let pa = {
  a : 1,
  b : 2,
  c : 3
}

objParams(pa);//?
