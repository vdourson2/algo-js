//Create a program that will re-use the Rectangle class you created previously. 
//It should generate 1000 random instances of Rectangle with random positions and sizes. 
//Then it will display all colliding rectangles amongst those that were generated that way.

//This class creat rectangles with topLeftXPos, topLeftYPos, width and length as parameters
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

//This function generate a random number between 0 and 20, with two decimals
function randomN(){
    return Math.floor(Math.random()*2000)/100;
}

//This function generates an array of n rectangles
function generateRect(n) {
    let rectangles = [];
    for (let i=0; i<n; i++) {
        let r = new Rectangle(randomN(),randomN(),randomN(),randomN());
        rectangles.push(r);
    }
    return rectangles;
}

console.log(generateRect(3));

// let greenRect = new Rectangle(3,6,4,3);
// let redRect = new Rectangle(8,5,2,5);
// let purpleRect = new Rectangle(0,9,2,1);
// let blueRect = new Rectangle(1,5,3,2);
// let yellowRect = new Rectangle(4,8,3,2);

// console.log("Green collides red?");
// console.log(greenRect.collides(redRect));

// console.log("Green collides purple?");
// console.log(greenRect.collides(purpleRect));

// console.log("Green collides blue?");
// console.log(greenRect.collides(blueRect));

// console.log("Green collides yellow?");
// console.log(greenRect.collides(yellowRect));
