function loop(loopBase, targetName, display,datasetOne,value, datasetTwo){
  for(let i=0; i<loopBase; i++){
    targetName[i].style.display= display;
    
    if(datasetOne[i].dataset.menus === datasetTwo){
      targetName[i].style.display= "block";
      if(value === true){
        console.log(value);
        for(let j=0; j<loopBase; j++){
          // createElement("data-menus", menuArr, menuArr.length, "div", "delete")
        }
      }
      
    }
  }
}

// pseudo 1. 반복문
// pseudo 2. "원하는 횟수만큼"
// pseudo 3. "원하는 디스플레이값"
// pseudo 4. dateset1, 2 비교문용
// pseudo 5. boolean 변수

// 트루일때 클릭하면 박스 생성 끝나고 나서 펄스 펄스에서는 다른것을 

const title = ["A", "B", "C", "D"];
const boxList = ["a", "b", "c", "d"];
const thumList = {
  a : [1,2,3,4],
  b : [2,3,4,5,6],
  c : [2233,22],
  d : [1,23,3,4,5]
}

// 1. 0번째 A가 다른 0번째를 감지할 수 있는지
// 2. 생성 된 것과 생성되지 않은 것을 감지 할 수 있는지





function loopSolution(title, boxList) {
  // pseudo 1. title을 클릭하면 title의 인덱스가 -> boxList에 동일한 인덱스로 적용시키기
  if(title)
  
  console.log(title[0], boxList[0]);
  console.log(title[1], boxList[1]);
  console.log(title[2], boxList[2]);
  console.log(title[3], boxList[3]);



}