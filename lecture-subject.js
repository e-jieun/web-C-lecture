
const fs = require('fs');
const path = require('path');
const studentList = require('./web-c-student-list');
// import {studentList} from "./web-c-student-list.js";
console.log(studentList);
console.log(__dirname);



const lectureSubject = [];
lectureSubject.push('작품발표회');
lectureSubject.push('서비스 경험 디자인관찰조사');
lectureSubject.push('서비스 경험 디자인 시나리오 개발');
lectureSubject.push('시각디자인 리서치 조사');
lectureSubject.push('비주얼 아이데이션 전개');
lectureSubject.push('비주얼 아이데이션 구상');
lectureSubject.push('시각디자인 리서치 분석');
lectureSubject.push('디자인 구성요소 설계');
lectureSubject.push('디자인 구성요소 응용');
lectureSubject.push('디자인 구성요소 제작');
lectureSubject.push('프로토타입 제작 및 사용성테스트');
lectureSubject.push('프로토타입 기초데이터 수집 및 스케치');
lectureSubject.push('스마트 문화앱 UX설계');
lectureSubject.push('시안디자인 개발 심화');
lectureSubject.push('스마트 문화앱 UI 디자인');
lectureSubject.push('반응형 웹 기본 개념 및 가변그리드');
lectureSubject.push('메인페이지, 서브페이지 작업');
lectureSubject.push('CSS분리, 수정보완');
lectureSubject.push('프로젝트 완료 결과보고서 작성');
lectureSubject.push('프로젝트 완료 최종보고');
lectureSubject.push('프로젝트 완료 자료정리');
lectureSubject.push('디지털 디자인 사후관리');


for(let i = 0; i < lectureSubject.length; i++) {
  if(i < 10) {
    fs.mkdir(path.join(__dirname+`/[0${i}]${lectureSubject[i]}/`), (err) => {
      if (err) throw err;
    });
  } else {
    fs.mkdir(path.join(__dirname+`/[${i}]${lectureSubject[i]}/`), (err) => {
      if (err) throw err;
    });
  }
}
