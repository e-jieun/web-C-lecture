let obj = {
  a : 1,
  b : 2,
  c : 1, 
  d : 2,
  sum:function(one, two) {
    if(typeof one === "number" && typeof two === "number") {
      return one + two;
    } else {
      console.error("너 지금 데이터타입 입력 잘못 됐어");
    }
  }
}

console.log(obj.a === obj.b || obj.a === obj.c); // true
console.log(obj.a === obj.b && obj.a === obj.c); // false
console.log(obj.sum(obj.a, "2")); // method

