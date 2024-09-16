// In this file we will add the Exercise questions 

// Question 1 : 
//Let us create sample nest 

const nestedArray = [[1, 2], [2, 3], [4, 5], [6, 7]];

// Using the reduce to flatten the array 
const flattenedArray = nestedArray.reduce((accumulator, currentArray) => {
    return accumulator.concat(currentArray);
}, []); //The initial value is an empty array []

console.log(flattenedArray); 
