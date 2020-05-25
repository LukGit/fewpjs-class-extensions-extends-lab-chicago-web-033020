// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides
    this.count = this.sides.length 
  }

  get countSides(){
    return this.sides.length
  }

  get perimeter(){
    let sum = 0
    for (let i = 0; i < this.count; i++){
      sum += this.sides[i]
    }
    return sum
  }
}

class Triangle extends Polygon {
  get isValid(){
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
  }
}

class Square extends Polygon {
  get isValid(){
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    let side4 = this.sides[3]
    return ((side1 === side2) && (side1 === side3) && (side1 === side4))
  } 

  get area(){
    return this.sides[0] * this.sides[0]
  }
}