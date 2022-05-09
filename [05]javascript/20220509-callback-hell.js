function testA() { 
  console.log('testA');
  testB();

}

function testB() {
  console.log('testB');
  testC();
}

function testC() {
  console.log('testC');
}


testA();