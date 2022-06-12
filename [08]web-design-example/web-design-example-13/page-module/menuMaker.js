function menuMaker (arr, tagName, idValue) {
  let result = '';
  arr.forEach((value, index)=>{
    result += `<${tagName}><a href="#${idValue}-${index}"> ${value}-${index}</a></${tagName}>`;
  });
  return result;
}

export default menuMaker