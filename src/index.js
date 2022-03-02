class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  getName() {
    alert(`My name is ${this.name}, age is ${this.age}`)
  }

  eat() {
    alert(`${this.name} eat something`)
  }
}

class Son extends Person {
  constructor(name, age, number) {
    super(name, age)
    this.number = number
  }

  getCode() {
    alert(`My name is ${this.name}, My code is ${this.number}`)
  }
}

let wang = new Son('wang', 16, 12)
wang.getCode()