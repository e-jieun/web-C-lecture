// set-data example
const databaseStudy = {
  "데이터베이스의 특징 3요소" : {
    "파일 시스템과 자료의 복잡한 내용을 감추어 복잡한 자료를 쉽게 사용" : [
      "자료의 핵심 내용을 추출, 사물들에서 공통의 성질을 추출하는 것",
      "추상화 = 개념화, 일반화"
    ],
    "자료 독립(Data Independency)" : [
      "프로그램을 변경하지 않고 자료구조 변경이 가능"
    ],
    "자기 정의(Self Definition)" : {
      "데이터베이스가 스스로의 내용을 정의하고 저장" : [
        "자료의 구성과 내용을 DB가 스스로 기억하고 관리하는 기능"
      ]
    }
  },
  "데이터베이스 구성요소" : {
    "개체(entity)" : [
      "데이터베이스가 표현하려고 하는 유형, 무형의 정보 대상, 서로 구별될 수 있는 것",
      "개체(entity)는 컴퓨터가 취급하는 파일 구성 측면에서는 레코드(record)에 해당",
      "단독으로 존재 가능",
      "개체(entity)는 하나 이상의 속성(attribute)으로 구성"
    ],
    "속성(attribute)" : [
      "속성은 개체의 특성이나 상태를 기술하는 것",
      "데이터의 가장 작은 논리적 단위",
      "단독으로 존재 불가능",
      "속성은 파일 구조에서는 데이터 항목(item) 또는 필드(field)",
      "도메인이란 하나의 속성이 취할 수 있는 같은 타입의 모든 값의 집합"
    ],
    "관계(relationship)" : [
      "개체 집합과 개체 집합 간에는 여러 가지 유형의 관계(relationship)가 존재",
      {"속성 관계(attribute relationship)": [
        "개체 내의 관계, 속성과 속성 사이의 관계"
      ]},
      {"개체 관계(entity relationship)" : [
        "개체 간의 관계(example: 학생과 교수의 지도 관계)"
      ]},
      {"개체 타입" : [
        "스킴, 스키마, 릴레이션의 내포(intension)"
      ]},
      {"개체 집합" : [
        "릴레이션 인스턴스, 튜플의 집합, 개체 어커런스(인스턴스)의 집팝 릴레이션 외연(extension)"
      ]} 
    ]
  },
  "데이터베이스의 구조" : {
    "논리적 구조(logical organization)" : [],
    "물리적 구조(physical organization)" : [],
    "대응관계" : [
      "하나의 데이터베이스를 표현하는 논리적 구조와 물리적 구조는 당연히 서로 대응관계를 가짐으로써 동등성을 유지개체(entity)"
    ]
  }

}
window.addEventListener('load', function() {
// ? DOM API가 모두 완료 되었을때 이벤트 발생
const root = document.getElementById('root');

/*
  todo : 1행에 초기화된 객체를 어떤 외부 데이터라고 가정한다.
  todo : 다차원으로 객체가 구성되어있으며, 항목별로 분류 되어있다.
*/

for(let obj in databaseStudy) {
  console.log(obj); //? 객체의 키값이 하나씩 console에 출력된다.

}



});