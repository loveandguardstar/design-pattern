class Car {
  constructor(num) {
    this.num = num
  }
}

// 摄像头
class Camera {
  shot(car) {
    return {
      num: car.num,
      inTime: Date.now()
    }
  }
}
// 出口显示屏
class Screen {
  show(car, inTime) {
    console.log('车牌号', car.num);
    console.log('停车时间', Date.now() - inTime);
  }
}

class Park {
  constructor(floors, camera, screen, carList) {
    this.floors = floors || []
    this.camera = camera
    this.screen = screen
    this.carList = carList
  }

  emtpyNum() {
    return this.floors.map(floor => {
      return `${floor.index} 层还有 ${floor.emptyPlaceNum()}个空停车位`
    }).join('\n')
  }

  in(car) {
    const info = this.camera.shot(car)
    const i = parseInt(Math.random() * 100 % 100)
    const place = this.floors[0].places[i]
    place.in()
    info.place = place
    this.carList[car.num] = info
  }

  out(car) {
    const info = this.carList[car.num]
    const place = info.place
    place.out()
    this.screen.show(car, info.inTime)
    delete this.carList[car.num]
  }
}

class Floor {
  constructor(index, places) {
    this.index = index
    this.places = places || []
  }

  emptyPlaceNum() {
    let num = 0
    this.places.forEach(p => {
      if (p.empty) {
        num++
      }
    })
    return num
  }
}

class Place {
  constructor() {
    this.empty = true
  }
  in () {
    this.empty = false
  }
  out () {
    this.empty = true
  }
}

// 测试
const floors = []
for (let i = 0; i < 3; i++) {
  const places = []
  for(let j = 0; j < 100; j++) {
    places[j] = new Place()
  }
  floors[i] = new Floor(i + 1, places)
}
const park = new Park(floors, new Camera(), new Screen(), {})

const car1 = new Car(100)
const car2 = new Car(200)
const car3 = new Car(300)

console.log('the first car in');
park.in(car1)
console.log(park.emtpyNum());
console.log('the second car in');
park.in(car2)
console.log(park.emtpyNum());
park.out(car1)
park.out(car2)
console.log('the third car in');
park.in(car3)
console.log(park.emtpyNum());
