//This function displays in an array the minimum and maximum elements of a given array

let minMax = (array) => {
    let sortArray = array.sort(function(a,b) {return a-b});
    return [sortArray[0], sortArray[array.length-1]];
}

console.log(minMax([3, 8, 3, 2, 5, 6]));