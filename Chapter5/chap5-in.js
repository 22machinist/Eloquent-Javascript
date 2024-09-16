// In this file we will add all the codes of chapter 5 

const SCRIPTS = require("./script");

let total = 0;
let count = 1;

while (count <= 10) {
    total += count;
    count += 1;
}
console.log(total);

for (let i = 0; i < 10; i++) {
    console.log(i);
}

function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}


//Now we will add the repeat function
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log);

//Let us try to use a repeat function with function defined in it 

let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i + 1}`);
});
console.log(labels);


//Now we will create another function 
function greaterThan(n) {
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

// Let us create another function
function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}

noisy(Math.min)(3, 2, 1);

//Let us create another function

function unless(test, then) {
    if (!test) then();
}

repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    });
});


//Let us create another function

["A", "B"].forEach(l => console.log(l));

// Let us create a Filtering Array 
function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

//Let us add the function in related to type script

console.log(filter(SCRIPTS, script => script.living));

console.log(SCRIPTS.filter(s => s.direction == "ttb"));

//Let us define the map function 
function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}


let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlScripts, s => s.name));

//Let us create the reduce function 
function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

// let us use reduce function in a different manner 
console.log([1, 2, 3, 4].reduce((a, b) => a + b));

//Now let us create a character counter function 
function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}));

// Composability 
let biggest = null;
for (let script of SCRIPTS) {
    if (biggest == null || characterCount(biggest) < characterCount(script)) {
        biggest = script;
    }
}

//Let us create another function 
function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year))));

console.log(Math.round(average(SCRIPTS.filter(s => !s.living).map(s => s.year))));

//Now let us create a loop 
let expo = 0, counts = 0;
for (let script of SCRIPTS) {
    if (script.living) {
        expo += script.year;
        counts += 1;
    }
}

console.log(Math.round(expo / counts));

//Let us create another function 
function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

console.log(characterScript(121));

//Let us create another function 

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({ name, count: 1 });
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2));


//Let us create another function
function textScripts(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({ name }) => name != "none");

    let total = scripts.reduce((n, { count }) => n + count, 0);
    if (total == 0) return "No scripts found";

    return scripts.map(({ name, count }) => {
        return `${Math.round(count * 100 / total)} % ${name}`;
    }).join(", ");
}


console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));

