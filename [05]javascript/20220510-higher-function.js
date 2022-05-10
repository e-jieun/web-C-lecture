
// * 고차함수 : 제작자가 만드는것
// * higher order function
// * 알고리즘 제작법

function typeA() {
  console.log('아이워즈카');
}


function typeB() {

  // * typeB의 함수 알고리즘은 
  // * 무슨 문자열을 콘솔에 찍은 다음
  // * typeA() 함수를 호출해준다.

  console.log('나는 날개달린 호랑이다');
  typeA();
}
// typeB();


function typeC(target) {

  target.addEventListener("click", ()=>{});
  target.addEventListener("scroll", ()=>{});
  target.addEventListener("wheel", ()=>{});

}

// typeC(root);
// typeC(items);

// * 객체로 묶어서 관리한다.

const typeP = {
  objectA: function(string) {
    console.log(string);
  },
  objectB: function() {
  }
}

// typeP.objectA("hello");

console.log(console.table("hello", function() {console.log('bye')}));