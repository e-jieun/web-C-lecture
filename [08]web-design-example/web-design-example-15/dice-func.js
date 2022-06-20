 function diceAlgorithm(min, max) {
  if(typeof min === "number" && typeof max === "number") {
    let result = Math.random() * (max - min) + min;
    return Math.floor(result);
  } else {
    console.log('need to parameter typecheck');
  }
}


export default diceAlgorithm;