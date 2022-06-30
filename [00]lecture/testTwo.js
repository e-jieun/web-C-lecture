const fs = require('fs');
fs.readFile('./test.JSON', (err, data) => {
  if(err) throw err
  
  const test  = JSON.parse(data);

  console.log(a)

})