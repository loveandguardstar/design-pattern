class Car {
  constructor(name, number) {
    this.name = name
    this.number = number
  }
}

class Kuai extends Car {
  constructor(name, number) {
    super(name, number)
    this.price = 2 * number
  }
}

class Zhuan extends Car {
  constructor(name, number) {
    super(name, number)
    this.price = 2 * number
  }
}

class Trip {
  constructor(car) {
    this.car = car
  }

  start() {
    console.log(`开始，车牌${this.car.name}`)
  }

  end() {
    console.log(`结束： ${this.car.price}`);
  }
}

let car = new Kuai('444', 2)