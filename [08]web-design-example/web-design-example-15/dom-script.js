import diceAlgorithm from './dice-func.js'
window.addEventListener('load', function() {

  const root = document.getElementById('root');
  const dice = document.getElementById('dice');
  const trigger = document.getElementById('trigger');
  
  trigger.addEventListener('click', function() {
    let rotateValue = 0;
    dice.style.transform = `rotate(${rotateValue}deg)`;
    dice.innerHTML = "";
    let getDiceNumber = diceAlgorithm(1,7);
    let diceItem = [];
    let sectionString = `<section></section>`;
    for(let i = 0; i < getDiceNumber; i++) {
      diceItem.push(sectionString);
      // const diceElem = document.createElement('section');
      // dice.appendChild(diceElem);
    }
    let rotateTimer = setInterval(() => {
      if(rotateValue  < 90) {
        rotateValue++;
        dice.innerHTML = diceItem.join("");
        console.log(rotateValue)
        dice.style.transform = `rotate(${rotateValue}deg)`;
      } 
      if(rotateValue >= 90) {
        clearInterval(rotateTimer);
        rotateValue = 0;
      }
    }, );
  });









});