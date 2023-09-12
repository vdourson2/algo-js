//Function that takes the length and width of a rectangle and returns its surface

let calcSurface = (l, w) => l * w;

let length = Number(prompt("Enter the length of the rectangle", "Length"));
let width = Number(prompt("Enter the width of the rectangle", "Width"));

alert("The surface of the rectangle is " + calcSurface (length, width));