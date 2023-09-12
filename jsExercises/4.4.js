
let students =[
    "Elodie", 
    "Mathias", 
    "Lucas", 
    "Rosalie", 
    "Lidwine", 
    "Stephane", 
    "Tim", 
    "Virginie", 
    "Justine F", 
    "Carole", 
    "Thomas", 
    "Antoine", 
    "Kimi", 
    "Valentin", 
    "Justine L", 
    "Elisabeth", 
    "Pierre", 
    "Justin", 
    "Robin", 
    "Layla", 
    "Marie", 
    "Alexandre Vdw", 
    "Alexandre V", 
    "Bastien", 
    "Dorian"];
    
// Function that takes 2 parameters :
//     inputAr : An array of learners
//     n : A number that should be greater than 0 and less than the length of inputAr
// The function return an array of randomly selected learners.

function pickLearner(inputAr, n) {
    let randomStudents = [];
    for (let i=0; i<n; i++) {
        let index = Math.floor(Math.random()*inputAr.length);
        randomStudents.push(inputAr[index]);
        inputAr.splice(index, 1);
    }
    return randomStudents.sort();
}

let number = 5;
console.log(pickLearner(students,number));