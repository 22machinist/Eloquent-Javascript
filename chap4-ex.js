// In this file we will code all the questions 


// Question 1 : 
function range(a, b, step = 1) {
    let numbers = [];

    //Now we will handle positive and negative step
    if (step > 0) {
        for (let i = a; i < b; i += step) {
            numbers.push(i);
        }
    } else {
        for (let i = a; i >= b; i += step) {
            numbers.push(i);
        }
    }
}

range(2, 5);

//Now we will create the sum function

function sum(...numbers) {
    //In this function we used Rest Parameters to get the result 
    let sum = 0;
    for (let x of numbers) {
        sum += x;
    }
    return sum;
}

console.log(sum(2, 3, 4, 5));

//Now we will merge both the functions defined above 
console.log(sum(...range(2, 6)));

//Now let us define the function that will reverse the array without using the reverse method
//let us define the function that will reverse the array by creating a new array

function reverseArray(arr) {
    let x = [];
    //Looping backwards through the array
    for (let i = arr.length - 1; i >= 0; i--) {
        x.push(arr[i]);
    }

    return x;
}

//Example 
let y = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));

//Now we will create the function that will not declare the new array
//We will use in-place algorithm

function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;

    //Swaaping the elements from start and end until the middle
    while (left < right) {
        //Swapping arr[left] and arr[right]
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        //Moving the pointers towards the center
        left++;
        right--;
    }

    return arr;
}

//Example 

let q = [6, 7, 8, 9, 10];
console.log(reverseArrayInPlace(arr));
