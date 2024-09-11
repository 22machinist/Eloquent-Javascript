//In this file we will write all the codes asked in the excercise section of the chapter 2 

//Question 1 : 
let pattern = "";
for (let i = 1; i <= 7; i++) {
    pattern += "#";
    console.log(pattern);
}

// Question 2 : 
// In this code we will create a code that will console all the numbers from 1 to 100
// Number divisible by 3 will print fizz 
// Number divisible by 5 will print buzz 

// Let's code : 
for (let i = 1; i <= 100; i++) {

    //Now we will add if statements to add the conditions
    if (i % (3 * 5) === 0) {
        console.log(i);
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Question 3 : 
// Now we will create a program that represents this :
// # # # # 
//  # # # #
// # # # # ... and so on


for (let i = 1; i <= 8; i++) {
    let x = " # # # #";
    let y = "# # # #";
    if (i % 2 === 0) {
        console.log(x);
    } else {
        console.log(y);
    }
}
