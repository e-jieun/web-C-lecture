function randomArray(min, max, loopValue) {

  let storageArray = [];

  for (let i = 0; i < loopValue; i++) {
    const getRandomInt = Math.floor(Math.random() * (max - min) + min);
    storageArray.push(getRandomInt);
  }
  console.log(storageArray);
}
randomArray(50, 100, 10);