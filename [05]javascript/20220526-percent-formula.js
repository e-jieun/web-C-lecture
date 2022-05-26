    /*
    * 싫지만 수학공식
    1. 전체값에서 일부값 퍼센트 구하기 : 일부값 / 전체값 * 100
    2. 전체값에서 몇 퍼센트는 얼마인지 구하기 : 전체값 * 퍼센트 / 100
    3. 숫자를 몇 퍼센트 증가시키는 공식 : 숫자 * (1 + 퍼센트 / 100)
    4. 숫자를 몇 퍼센트 감소하는 공식 : 숫자 * (1 - 퍼센트 / 100)
    */

    // ?  1. 전체값에서 일부값 퍼센트 구하기 : 일부값 / 전체값 * 100
    function percentOne(total, value) {
      let result = (value / total) * 100;
      console.log(`전체값 ${total}에서 ${value}만큼의 값은 : ${result}% 입니다.`);
      return result;
    }
    console.log(percentOne(200, 20));

    // ? 2. 전체값에서 몇 퍼센트는 얼마인지 구하기 : 전체값 * 퍼센트 / 100
    function percentTwo(total, percent) {
      let result = (total * percent) / 100;
      console.log(`전체값 ${total}에서 ${percent}%의 값은 : ${result}입니다.`);
      return result;
    }
    console.log(percentTwo(4000, 10));


    // ? 3. 숫자를 몇 퍼센트 증가시키는 공식 : 숫자 * (1 + 퍼센트 / 100)
    function percentThree(value, percent) {
      let result = value * (1 + percent / 100);
      console.log(`숫자값 ${value}에서 ${percent}% 증가시키면, 총 ${result}값이 됩니다.`);
      return result;
    }
    console.log(percentThree(100, 2));

    // ? 4. 숫자를 몇 퍼센트 감소하는 공식 : 숫자 * (1 - 퍼센트 / 100)
    function percentFour(value, percent) {
      let result = value * (1 - percent / 100);
      console.log(`숫자값 ${value}에서 ${percent}% 감소시키면, 총 ${result}값이 됩니다.`);
      return result;
    }
    console.log(percentFour(100, 2));
