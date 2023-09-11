//This function calculate the average value of a given array
let average = (array) => array.reduce ((sum, current) => (sum + current), 0)/array.length;

console.log(average([1, 2, 3, 4, 5]));
console.log(average([100, 101, 102]));
