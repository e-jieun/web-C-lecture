export const promptTimer = (element, obj) => {
  let nameArr = [];
  let dataArr = [];

  for(let key in obj) {
    nameArr.push(key);
    dataArr.push(obj[key]);
  }

  element.innerHTML = 
      ` 
      ${nameArr[0]} : ${dataArr[0]} <br>
      ${nameArr[1]} : ${dataArr[1]} <br>
      ${nameArr[2]} : ${dataArr[2]} <br>
      ${nameArr[3]} : ${dataArr[3]} <br>
      ${nameArr[4]} : ${dataArr[4]} <br>
      ${nameArr[5]} : ${dataArr[5]} <br>
      ${nameArr[6]} : ${dataArr[6]} <br>
      `;      
}
