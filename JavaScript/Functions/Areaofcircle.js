
const circle = {
    radius: 7,
    get area() {
      return Math.PI * this.radius * this.radius;
    }
  };
  
  console.log(circle.area);