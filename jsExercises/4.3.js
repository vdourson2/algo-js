//Function that returns a random integer between 1 and 10
function rand10() {
    return Math.floor(Math.random()*10);
}

//function that returns an array of n numbers between 1 and 10
let multiRand = (n) => {
    let arrayRandomNumbers = [];
    for (let i=0; i<n; i++) {
        arrayRandomNumbers.push(rand10());
    } 
    return arrayRandomNumbers;
}

//Ask how many random numbers you want
let num = Number(prompt("How many numbers do you need?"));
alert(multiRand(num));