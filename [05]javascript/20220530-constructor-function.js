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

const kongukjae = new Example('공욱재', 22, "teacher", "desginer");
console.log(kongukjae.name);
console.log(kongukjae.getExampleName());
console.log(kongukjae.setAgePlus(3));





// https://pixijs.com/ 
/*




*/