//This extra displays the rectangles with canvas

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

//This function takes as argument an integer "size",
// and generate a random integer between 0 and "size".
function randomN(size){
    return Math.floor(Math.random()*size);
}


//This function generates an array of n rectangles with random positions and sizes.
function generateRect(n) {
    let rectangles = [];
    for (let i=0; i<n; i++) {
        let r = new Rectangle(randomN(200),randomN(200),randomN(50)+50,randomN(50)+50);
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

//Generate an array of rectangles
let arrayRectangles = generateRect(3);
console.log("The array with rectangles is : ");
console.table(arrayRectangles);

//Search and display colliding rectangles
let arrayToSort = [...arrayRectangles];
collidings(arrayToSort);


//Display rectangles in canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

(function draw(){
    for (let el of arrayRectangles) {
        ctx.fillStyle = `rgba(${randomN(256)},${randomN(256)},${randomN(256)},0.5)`;
        ctx.fillRect(el.topLeftXPos,el.topLeftYPos,el.width,el.length);
    }
})();

//This function takes as argument an integer "size",
// and generate a random integer between 0 and "size".
function randomN(size){
    return Math.floor(Math.random()*size);
}
