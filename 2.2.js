let min = Number(prompt("Give a min number","Min"));
let max = Number(prompt("Give a max number","Max"));
let current = Number(prompt("Give a current number, between min and max","Current"));

(min>max) ? alert("The minimum is greater than the maximum!") : (min<current) && (current<max) ? alert("Ok") : alert("Ko");