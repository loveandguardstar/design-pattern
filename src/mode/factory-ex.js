// 工厂模式之 jQuery

class JQuery {
  constructor(selector) {
    let slice = Array.prototype.slice
    let dom = slice.call(document.querySelectorAll(selector))
    let len = dom ? dom.length : 0
    for (let i = 0; i < len; i++) {
      this[i] = dom[i]
    }
    this.length = len
    this.selector = selector || ''
  }

  append(node) {}
  addClass(name) {}
  html(data) {}
}

window.$ = function (selector) {
  return new JQuery(selector)
}

// 工厂模式之 React 

class Vnode {
  constructor(tag, attrs, chilren) {}
  // ...省略...
}

React.createElement = function (tag, attrs, children) {
  return new Vnode(tag, attrs, children)
}

// Vue
Vue.compnent('async-example', function (resolve, reject) {
  setTimeout(function () {
    resolve({
      template: '<div>666</div>'
    })
  }, 1000)
})