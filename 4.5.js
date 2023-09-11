//Function which takes the coordinates of two different points A and B in a 2D space
//and returns the distance between those two points.
function calcDistance(a, b) {   
    return Math.round(Math.sqrt(Math.pow(a[0]-b[0],2)+Math.pow(a[1]-b[1],2))*100)/100;
}

let pointA = [1,1];
let pointB = [2,2];
console.log("The distance between the points A(" + pointA + ") and B(" + pointB + ") is " + calcDistance(pointA, pointB));
