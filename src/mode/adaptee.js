class Adaptee {
  specificRequest() {
    return '德国标准插头'
  }
}

class Target {
  constructor() {
    this.adaptee = new Adaptee()
  }

  request() {
    let info = this.adaptee.specificRequest()
    return `${info} - 转换器，标准插头`
  }
}

module.exports = Target