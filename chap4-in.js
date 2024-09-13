// Arrays 
let listofNumbers = [2, 3, 5, , 7, 11];
console.log(listofNumbers[2]);
console.log(listofNumbers.length);

let doh = "Dohhhh";
console.log(doh.toUpperCase());

//Now we will explore different properties of array
let x = [1, 2, 3];
x.push(4); //This will add 4 to the array
console.log(x);
x.pop(1) //This will remove the 1 from the array
console.log(x);

//Now we will define the object
let day1 = {
    squirrel: false, //Squirrel is name of the property and false is the value
    events: ["work", "tree", "pizza"]
};

//Now we will see different properties of object

console.log(day1.squirrel); //This will output the property named as "squirrel"
//Now we will see if the property defined is in the object or not 

console.log(day1.wolf); //Return will be undefined

//Now we will add the property in the object
day1.wolf = "animal"; //This will add the property in the object 
console.log(day1);

//Now we will see the updated property 
console.log(day1.wolf);

//Now we will add another object
let anObject = {
    left: 1,
    right: 2
}
//Now we will explore another property named "delete"
delete anObject.left; //This will get deleted

console.log(anObject);
anObject.left = 1;
anObject.east = 3;
anObject.west = 4;
anObject.north = 5;
anObject.south = 6;

console.log(anObject);

//Now we will explore another property
console.log(Object.keys(anObject));

//Now we will assign new things to the object 
// Object.assign Property copies one property of object to another 
let objectA = {};
Object.assign(objectA, { anObject, b: 3 });

console.log(objectA);

//Now we will define the journal that keeps the array of objects
let journal = [
    {
        events: ["work", "tree", "running", "pizza"],
        squirrel: false
    },
    {
        events: ["work", "ice cream", "cauliflower", "brushed teeth"],
        squirrel: false
    },
    {
        events: ["weekend", "cycling", "break"],
        squirrel: true
    },
    {
        events: ["pizza"],
        squirrel: true
    }
];

console.log(journal);

//Let us code another function
function tableFor(event, journals) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journals.length; i++) {
        let entry = journals[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

console.log(tableFor("pizza", journal));

//Now let us see more properties of arrays

let todolist = [];
function remember(task) {
    todolist.push(task);
}
function gettask() {
    return todolist.shift();
}
function rememberUrgently(task) {
    todolist.unshift(task);
}

console.log([1, 2, 3, 2, 1].indexOf(2)); //This will tell me the index of defined element from begining
console.log([1, 2, 3, 2, 1].lastIndexOf(2)); //This will tell me from behind


console.log([0, 1, 2, 3, 4].slice(2, 4)); //This will show [2,3]
console.log([0, 1, 2, 3, 4].slice(2)); //Output = [2,3,4]

//Now we will another function
function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2));
//Output = ["a" , "b" , "d" , "e"]

let sen = "Secretary birds specialize in stomping";
let words = sen.split(" ");

console.log(words);

let core = words.join(". ");
console.log(core);

//Let us test the repeat method
console.log("LA".repeat(3));


//Let us try to understand Rest Parameters
function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) {
            result = number;
        }
        return result;
    }
}

console.log(max(4, 5, 6, 7, 8, 9));

//Let us understand it to another way 
let numbers = [5, 6, 7];
console.log(max(...numbers));

//Let's now understand Math Object

function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle)
    };
}

console.log(randomPointOnCircle(2));

//Now let us understand Destructuring 

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) / Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]));
}

function phi2([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) / Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n01));
}


//Now let us some tricks that work for object
let { name } = {
    name: "Ashu",
    age: 23
};

console.log(name);

//Now let us understand about JSON today 
//To convert normal string into JSON
let string = JSON.stringify({
    squirrel: false,
    events: ["weekend"]
});

console.log(string);
//To convert from json to javascript
console.log(JSON.parse(string));








