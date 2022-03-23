// 单例模式

// jQuery 只有一个 $（借用了单例模式的思想）
if (window.jQuery != null) {
  return window.jQuery
} else {
  // 初始化
}

class loginForm {
  constructor() {
    this.show = false
  }

  show() {
    if (this.show) return false
    this.show = true
    console.log('It is show');
  }

  hide() {
    this.show = false
    console.log('It is hide');
  }
}

loginForm.getInstance = (function () {
  let instance
  return function() {
    if (!instance) {
      instance = new loginForm()
    }
    return instance
  }
})()