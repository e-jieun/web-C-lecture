
let value = 9;
let timerA = setInterval(function() {
  if(value > -1) {
    console.log(value);
    value--;
  } else {
    clearInterval(timerA);
  }
}, 100);

let timerB = setInterval(function() {
  console.log("timerB");
  let value = 9;
  let timerA = setInterval(function() {
    if(value > -1) {
      console.log(value);
      value--;
    } else {
      clearInterval(timerA);
    }
  }, 100);
  
},100);