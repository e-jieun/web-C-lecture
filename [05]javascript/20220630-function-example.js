function outerA() {
  function innerA() {
    return 'this is outerA return string';
  }
  return "this is outerA return";
}
console.log(outerA()); // ? 1번 콘솔
/*
  ? 1번 콘솔은 무엇이 나오는지 짐작해보기

*/
// console.log(innerA()); // ? 2번 콘솔
/*
  ? 2번 콘솔은 왜 에러가 나는지 짐작해보기

*/



function outerB(massage) {
  function innerB() {
    return `this is parameter ${massage}`;    
  }
  return innerB();
}
console.log(outerB('this is massage')); // ? 3번 콘솔

/*
  ? 3번 콘솔은 무엇이 나오는지 짐작해보기

*/




function outerC() {
  const innerC = function() {
    console.log(`this is innerC execution`);
  }
  return innerC();
}
console.log(outerC()); //? 4번 콘솔

/*
  ? 4번 콘솔의 리턴은 왜 undefined 인지 생각해보기

*/





function outerD(massage) {
  const innerD = function() {
    console.log('hello this is innerD function');
    return `innerC is ${massage}`;
  }
  return innerD();
}

console.log(outerD('function literal')); //? 5번 콘솔
console.log(outerD('wow awsome')); //? 5번 콘솔

/*
  ? 5번 콘솔은 어떤 결과가 나오는지 짐작해보기


*/




