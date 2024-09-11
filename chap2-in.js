// This file contains all the in chapter codes 

//Control Flow
let theNumber = Number(prompt("Pick the number : "));
console.log("Your number is the square root of" + theNumber * theNumber);

//Conditional execution
let x = Number(prompt("Pick number: "));
if (!Number.isNaN(x)) {
    console.log("Your Number is the square root of " + x * x);
} else {
    console.log("Why didn't you give me a number ?");
}

//Now we will create switch loops

switch (prompt("Weather: ")) {
    case "rainy":
        console.log("Remeber to bring umbrella !");
        break;
    case "sunny":
        console.log("Dress lightly !");
        break;
    case "cloudy":
        console.log("Go outside!");
        break;
    default:
        console.log("Unkown");
        break;
}