// 设计原则验证
// 构造函数与创建者分离
// 符合开放封闭原则


// 产品
class Product {
  constructor(name) {
    this.name = name
  }
  init() {
    alert('init')
  }
  fun1() {
    alert('fun1')
  }
  fun2() {
    alert('fun2')
  }
}

// 工厂
class Creator {
  create(name) {
    return new Product(name)
  }
}

module.exports = Creator