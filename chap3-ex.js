// This file will contain the code for the exercises of Chapter 3 

// Question 1 : 
console.log("This program figures out the minimum value entered .")

// let's code 

let num = [];
function min(num) {
    console.log(Math.min(num));
}

min(3, 4, 5, 6, 7);


// Question 2 :
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4));
console.log(isEven(5));
console.log(isEven(75));
console.log(isEven(50));

// Question 3 : 
console.log("Begining of question 3");
let s = "";
function countBs(s) {
    //In this function we will first breakdown the string
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) {
            console.log(s[i]);
        } else {
            return false;
        }
    }
}

countBs("Hello");

//Now let us add the another function that will check if the uppercase character is defined by the user 
console.log("New code");
let x = "";
let v = '';
function countChar(x, v) {
    for (let z = 0; z < x.length; z++) {
        if (x[z] === x[z].toUpperCase() && x[z] === v) {
            console.log(x[z]);
        } else {
            return false;
        }
    }
}

countChar("HePllo", 'H');