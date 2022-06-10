// ! 해당 파일을 실행시키고자 한다면 몇가지 절차를 거쳐야 한다.

// work.1 CLI : npm init
// ? 별도의 폴더를 만들어서 해당 파일을 옮긴뒤 npm init(초기화)를 설정하면, pakage.JSON이라는 명세 파일이 생성됨
// work.2 pakage.JSON 파일을 연후 "type":"module" 이라는 명세를 하나 붙여야 한다. 여기서 객체의 '키'는 JSON 파일 규칙상 쌍따옴표를 사용한다.
// ? import from <-- 구문은 비교적 최신에 개발된 방식이라 정식 지원은 아직 안되기 때문에 위의 작성방식은 '일종의 커스텀' 이다. 표준 방식은 commonJS 라고 한다.
// work.3 CLI : npm install -g axios 
// ? 외부 API데이터를 사용할 수 있게 해주는 모듈을 "컴퓨터 메인에 설치(-g)"
// work.4 CLI : npm install axios 
// ? -g 없는 실행으로 해당 폴더에 '로컬' 로 설치한다. 두번설치할 필요는 없지만 프로젝트에 넣어주는것이 관습이다.
// work.5 공공데이터 포털 : data.go.kr 에 가입후 -> 공휴일 API key를 발급 받는다.
// ? 무료 API 이긴하나, 접속폭주등 여러가지 기반사항들 때문에 '신청자'만 따로, 그리고 일일 접속량과 같은 아주약간의 제약이 있기 때문에 발급을 하여 허가를 받는 방식이다. (매우 빈번한 방식)
// ? 누구나 사용할 수 있으나, 무분별을 막는 것이 취지이기 때문에 신청즉시 바로 발급을 받을 수 있다.
// * ※ 인증키는 온라인에 공개해선 안된다. 
// * 아래의 myKey가 시리얼키를 넣는 자리이며, "일반 인증키(Encoding)" 값을 사용하면 된다.

import axios from "axios"; 

const myKey = `내가받은키` 
const urlJson = '&_type=json';


const queryObj = {
  "국경일" : "getHoliDeInfo",
  "공휴일" : "getRestDeInfo",
  "기념일" : "getAnniversaryInfo",
  "24절기" : "get24DivisionsInfo",
  "잡절" : "getSundryDayInfo",
  "연" : "solYear",
  "연값" : "2022",
  "월" : "solMonth",
  "월값" :"08"
}

const date = new Date();
console.log(date);

const dateObj = {
  year : date.getFullYear(),
  month : date.getMonth() + 1,
  monthEnglishFullName : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"],
  monthEnglichNickName : ["Jan", "Feb", "Mar", "Are", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  monthKoreaName : ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
  date : date.getDate(),  
  day : date.getDay(), //? 
  dayKoreaName: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
  getMonthEnglishFullName : function(value) {
    let result = this.monthEnglishFullName[value];
    return result;
  },
  getMonthEnglishNickName : function(value) {
    let result = this.monthEnglishNickName[value];
    return result;
  },
  getDayKoreaName : function(value) {
    let result = this.dayKoreaName[value]; 
    return result;
  },
}


const _URL = `http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/${queryObj["공휴일"]}?${queryObj["연"]}=${queryObj["연값"]}&${queryObj["월"]}=${queryObj["월값"]}&ServiceKey=${myKey}${urlJson}`;

axios.get(_URL).then((response) => {
  
  console.log(response.data.response.body.items);
})

function dateTest() {
  let koreaName = dateObj.dayKoreaName;
  console.log(koreaName);
  let getValue = new Date(2022, 1, 15).getDay();
  console.log(getValue);
  console.log(koreaName[getValue]);
}
dateTest();

function yunYear(year) {
  if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
  /*
    1. 연수가 4로 나누어 떨어지면 후보
    2. 연수를 100으로 나누었을 때 0이 아니면 후보
    3. 1과2을 모두 충족하면 윤년
    혹은
    4. 연수를 400으로 나누었을 때 나누어떨어지면 윤년 


  */
}


/*
2022/4 = 505.5 나누어 떨어지지 않으니 2022년은 윤달이 아니다.
2022/100 = 20.22 나누어 떨어지지 않으니 윤달이 없다.
2022/400 = 5.055 나누어 떨어지지 않으니 윤달이 아니다.

if 4로 딱 떨어지게 나눌 수 없으면 return 평년
else if 100로 딱 떨어지게 나눌 수 없으면 return 윤년
else if 400로 딱 떨어지게 나눌 수 없으면 return 평년
else return 윤년



1) 4년으로 나누어지는 해는 윤달(2월은 29일)이 있다.
2) 그러나 100년으로 나누어지는 해는 윤달이 없다.
3) 그러나 400년으로 나누어지는 해는 윤달이 있다.


*/
