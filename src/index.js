
/* common.js 模块化
  module.exports = 'name'
  require('')
*/

// let loadImg = require('./promise')

// let src = 'https://lupic.cdn.bcebos.com/20191203/3018932609_14.jpg'
// let result = loadImg(src)
// result.then((img) => {
//   alert(`width: ${img.width}`)
//   return img
// }).then((img) => {
//   alert(`height: ${img.height}`)
// }).catch(err => {
//   alert(err)
// })

// 1、工厂模式

// let Creator = require('./mode/factory')

// let creator = new Creator()
// let p1 = creator.create('hamburger')
// p1.init()
// p1.fun1()

// 2、单例模式
// let SingleObject = require('./mode/singleObject')
// let obj1 = SingleObject.getInstance()
// obj1.login()
// let obj2 = SingleObject.getInstance()
// obj2.login()

// console.log('obj1 === obj2', obj1 === obj2);

// 3、适配器模式
// let Adaptee = require('./mode/adaptee')
// let newA = new Adaptee()
// console.log(newA.request());

// 4、装饰器模式
// let Decorator = require('./mode/decorator')
// let newA = new Decorator()
// console.log(newA.request());