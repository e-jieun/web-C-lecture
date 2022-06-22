const listFunctionOne = [];

for(let i = 0; i < 5; i++) {
  const funcOne = (resolve, reject) => {
    setTimeout(()=> {
      console.log(`함수 ${i}번째 작업이 완료 되었습니다.`);
      resolve();
    },1000);
  }
  listFunctionOne.push(funcOne);
}

async function exeuteOne() {
  for(let i = 0; i < listFunctionOne.length; i++) {
    const funcItem = listFunctionOne[i];
    await new Promise(funcItem);
  }
}
exeuteOne();

