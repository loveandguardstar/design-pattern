class Circle {
  draw() {
    console.log('draw a circle');
  }
}

class Decorator {
  constructor (circle) {
    this.circle = circle
  }

  draw() {
    this.circle.draw()
    this.setRedBorder(circle)
  }

  setRedBorder(circle) {
    console.log('set red border');
  }
}