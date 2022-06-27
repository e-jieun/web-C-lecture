let recallCount = 0;
function randomArray(min, max, loopValue, limitValue) {
  let storageArray = [];
  for (let i = 0; i < loopValue; i++) {
    const getRandomInt = Math.floor(Math.random() * (max - min) + min);
    storageArray.push(getRandomInt);
  }
  let totalSum = storageArray.reduce((prev, cur) => {
    return prev + cur;
  });
  if (totalSum < limitValue) {
    recallCount++;
    console.log("recall");
    randomArray(min, max, loopValue, limitValue);
  } else {
    console.log('다시 실행한 횟수 : ' + recallCount);
    console.log('success');
    let sortResult = storageArray.sort((a, b) => {
      return a - b
    });
    console.log(sortResult);
    const namingArray = (array) => {
      let mappingArray = [];
      array.map((element) => {
        let medianValue = min + ((max-min) / 2);
        if(element > medianValue) {
          mappingArray.push(`over : ${element}`);
        } else {
          mappingArray.push(`under : ${element}`);
        }
      });
      return mappingArray;
    }
    let result = namingArray(sortResult);
    // console.log(result);
    return result;
  }
}

const executionObj = {
  min: 50,
  max: 100,
  looValue : 10,
  limitValue : 800,
}

console.log(randomArray(executionObj.min, executionObj.max, executionObj.loopValue, executionObj.limitValue));


