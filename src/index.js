
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

let Creator = require('./mode/factory')

let creator = new Creator()
let p1 = creator.create('hamburger')
p1.init()
p1.fun1()