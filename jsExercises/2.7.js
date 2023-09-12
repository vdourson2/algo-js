let n = Number(prompt("Enter a number", "number"));
let sum =0;
for (i=0; i<n;i++){
    sum += Number(prompt("Enter a new number", "Number"))
}
alert("The sum of the " + n + "numbers is " + sum);