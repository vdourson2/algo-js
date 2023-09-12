// Create a class name Rectangle with attributes topLeftXPos, topLeftYPos, width and length. 
// Add a method named collides(otherRectangle) that returns true only if the current rectangle collides with otherRectangle.
// Test the collides(otherRectangle) method by using multiple test cases.

class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    collides(otherRectangle){
        return !((otherRectangle.topLeftYPos > (this.topLeftYPos+this.length))||
        ((otherRectangle.topLeftYPos + otherRectangle.length) < (this.topLeftYPos)) ||
        (otherRectangle.topLeftXPos > (this.topLeftXPos+this.width))||
        ((otherRectangle.topLeftXPos + otherRectangle.width) < (this.topLeftXPos)))
    }
}

let greenRect = new Rectangle(3,6,4,3);
let redRect = new Rectangle(8,5,2,5);
let purpleRect = new Rectangle(0,9,2,1);
let blueRect = new Rectangle(1,5,3,2);
let yellowRect = new Rectangle(4,8,3,2);

console.log("Green collides red?");
console.log(greenRect.collides(redRect));

console.log("Green collides purple?");
console.log(greenRect.collides(purpleRect));

console.log("Green collides blue?");
console.log(greenRect.collides(blueRect));

console.log("Green collides yellow?");
console.log(greenRect.collides(yellowRect));
