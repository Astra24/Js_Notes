// check if the number is positive
const num = prompt("Enter a number: ");
if (num > 0) {
  console.log("The number is positive");
}



// check if the number is positive or negative/zero

const number1 = prompt("Enter a number: ");
if (number1 > 0) {
  console.log("The number is positive");
}
else {
  console.log("The number is either a negative number or 0");
}


// check if the number if positive, negative or zero
const numb = prompt("Enter a number: ");
if (numb > 0) {
    console.log("The number is positive");
}
else if (number == 0) {
  console.log("The number is 0");
}
else {
    console.log("The number is negative");
}


// check if the number is positive, negative or zero
const number = prompt("Enter a number: ");
if (number >= 0) {
    if (number == 0) {
        console.log("You entered number 0");
    } else {
        console.log("You entered a positive number");
    }
} else {
    console.log("You entered a negative number");
}