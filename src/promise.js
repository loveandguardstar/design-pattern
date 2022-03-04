function loadImg(src) {
  let promise =  new Promise((resolve, reject) => {
    let img = document.createElement('img')
    img.src = src
    document.body.appendChild(img)
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function () {
      reject()
    }
  })
  return promise
}

module.exports = loadImg