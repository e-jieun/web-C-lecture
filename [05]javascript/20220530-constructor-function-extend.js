class Example {
  constructor(name, age, work, job) {
    this.name = name;
    this.age = age;
    this.work = work;
    this.job = job;
  }

  getExampleName() {
    return this.name;
  }
  getExampleAge() {
    return this.age;
  }
  setAgePlus(plus) {
    return this.age + plus;
  }
}

class More extends Example {
  constructor(more, info) {
    super('공미남', 23, "student","university");
    this.more = more;
    this.info = info;
  }
}

const kongukjae = new Example('공욱재', 22, "teacher", "desginer");
console.log(kongukjae.name);
console.log(kongukjae.getExampleName());
console.log(kongukjae.setAgePlus(3));

const moreKong = new More('상속받는', '클래스들');

for(let key in moreKong) {
  console.log(key);
  console.log(moreKong[key])
}

