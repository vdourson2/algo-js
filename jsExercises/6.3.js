
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

//This function takes an array of objects of the class "Rectangle" 
//and displays all colliding rectangles in this array .
function collidings(arrayRect) {
    arrayRect.map((r,index) => r.index = index);
    for (var ind in arrayRect) {
        if (arrayRect.length > 1) {
            let rect1 = arrayRect.splice(0,1);
            let collidesWith = arrayRect.filter((nextRectangle) => rect1[0].collides(nextRectangle));
            console.log("Rectangle " + ind + " collides with : " );
            collidesWith.forEach((el) => console.log(el.index));
            console.log(collidesWith);
        }
    }
}

let arrayRectangles = generateRect(3);
console.log("The array with rectangles is : ");
console.log(arrayRectangles);
collidings(arrayRectangles);

