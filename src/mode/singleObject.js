
class SingleObject {
  login() {
    console.log('login....');
  }
}

SingleObject.getInstance = (function () {
  let instance
  return function () {
    if (!instance) {
      instance = new SingleObject()
    }
    return instance
  }
})()


module.exports = SingleObject