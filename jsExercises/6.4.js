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
        let r = new Rectangle(randomN(300),randomN(300),randomN(50)+50,randomN(50)+50);
        rectangles.push(r);
    }
    return rectangles;
}

//This function takes an array of objects of the class "Rectangle" 
//and displays all colliding rectangles in this array .
function collidings(arrayRect) {
    let ul = document.querySelector(".list");
    arrayRect.map((r,index) => r.index = index); //Add index of the element in the objet keep it after filter
    for (var ind in arrayRectangles) {
        if (arrayRect.length > 1) {
            let rect1 = arrayRect.splice(0,1);//Suppress first element of the array
            let collidesWith = arrayRect.filter((nextRectangle) => rect1[0].collides(nextRectangle));//Keep only rectangles that collide with the first one
            collidesWith.forEach((el, i) => {
                ul.appendChild(document.createElement("li")).textContent = `Rectangle ${rect1[0].index} with rectangle ${collidesWith[i].index}`;
            });
        }
    }
}

//Generate an array of rectangles
let arrayRectangles = generateRect(10);
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
        ctx.font = "30px Arial";
        ctx.fillStyle = "black";
        ctx.textAlign = "center"; 
        ctx.fillText(`${el.index}`,(el.topLeftXPos + el.width/2),(el.topLeftYPos+(el.length+20)/2));
    }
})();
