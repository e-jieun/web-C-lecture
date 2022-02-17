
const fs = require('fs');
const path = require('path');
const studentList = require('./web-c-student-list');
// import {studentList} from "./web-c-student-list.js";
console.log(studentList);
console.log(__dirname);






for(let i = 0; i < studentList.length; i++) {
  if(i < 10) {
    fs.mkdir(path.join(__dirname+`/[01]student-directory/[0${i}]${studentList[i]}/`), (err) => {
      if (err) throw err;
    });
  } else {
    fs.mkdir(path.join(__dirname+`/[01]student-directory/[${i}]${studentList[i]}/`), (err) => {
      if (err) throw err;
    });
  }
}
