import { promptTimer } from "./getTime-app-2.js"
/*

promptTimer 라는 함수는 from 절에 있는 경로에 선언되어있으므로 
해당 파일인 main-script.js 와 getTime-app-2.js는 연결되어있다. 

겹겹이 쌓일수록 파일의 '복잡도'가 높아지므로 
여러시도를 통해 유지보수 작업에 편리함을 가져다 주는 방식을 연구 할 것

위의 방식은 "함수 한개만을" 파일로 구성하는 방식이며
필요한 어느곳에서든 '재활용'하고자 할때 많이 쓰는 방식이다.

*/

const root = document.getElementById('root');
const timeTitle = document.getElementById('time-title');

    const date = new Date();

    const dateObj = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hour: date.getHours(),
      minutes : date.getMinutes(),
      seconds : date.getSeconds(),
      milliseconds: date.getMilliseconds()
    }

    promptTimer(timeTitle, dateObj);