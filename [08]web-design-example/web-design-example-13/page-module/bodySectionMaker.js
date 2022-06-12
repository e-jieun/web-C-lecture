function bodySectionMaker (arr, tagName, idValue) {
  let result = '';
  arr.forEach((value, index)=>{
    result += `<${tagName} id="${idValue}-${index}">${value}-${index}</${tagName}>`;
  });
  return result;
}
export default bodySectionMaker