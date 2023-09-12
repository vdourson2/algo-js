// Create a class named Circle with attributes xPos, yPos and radius. 
// Add a method named move(xOffset, yOffset) that will adjust the position of the circle. 
// Add a getter accessor named surface that will return the surface of the circle.
// Test its method and accessors by modifying the values and checking if everything is consistent.

class Cercle {
    constructor(xPos, yPos, radius){
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

    move(xOffset, yOffset){
        this.xPos += xOffset;
        this.yPos += yOffset; 
    }

    get surface(){
        return Math.PI * Math.pow(this.radius,2)
    }
}

let c1 = new Cercle(1,1,3);
console.log(c1);

c1.move(4,4);
console.log(c1);

console.log("La surface est " + c1.surface);