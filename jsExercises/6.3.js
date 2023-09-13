
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

//This function generates an array of n rectangles with random positions and sizes.
function generateRect(n) {
    let rectangles = [];
    for (let i=0; i<n; i++) {
        let r = new Rectangle(randomN(),randomN(),randomN(),randomN());
        rectangles.push(r);
    }
    return rectangles;
}
let arrayRectangles = generateRect(3);
console.log(arrayRectangles);

for (var ind in arrayRectangles) {
    if (arrayRectangles.length > 1) {
        let rect1 = arrayRectangles.splice(0,1);
        let collidesWith = arrayRectangles.filter((nextRectangle) => rect1[0].collides(nextRectangle));
        console.log("Rectangle " + ind + " collides with : " );
        console.log(collidesWith);
    }
}

