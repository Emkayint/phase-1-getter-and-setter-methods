// Add your Circle class here

class Circle{
  constructor(radius){
    this.radius = radius
  }

  set diameter(diam){
    return this.radius = diam / 2
  }

  get diameter(){
    return this.radius * 2
  }

  get circumference(){
    return Math.PI * 2 * this.radius
  }

  get area(){
    return Math.PI  * this.radius* this.radius
  }
  set circumference(circ){
    return this.radius = (circ / (Math.PI * 2))
  }

  set area (arr){
    return this.radius = Math.sqrt(arr/Math.PI)
  }
 
}

// let circle = new Circle(6)
// circle.area = 200 
// console.log(circle.radius)