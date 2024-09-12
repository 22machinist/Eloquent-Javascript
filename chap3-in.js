// In this file we will write down all the built-in codes of chapter 3


//Let us define simple function first 
const makeNoise = function () {
    console.log("Pling!");
};

makeNoise();

//Now we will define the function to calculate out when the power is given
const power = function (base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

console.log(power(2, 3));

// Let us unerstand nested scopes 
const humus = function (factor) {
    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(.25, "cup", "tahini");
};

// Now let's create another function 
let launchMissiles = function () {
    missileSystem.launch("now");
};
let safeMode = 0;
if (safeMode) {
    launchMissiles = function () {
        /* Do nothing */
        console.log("Error !");
    }
}

//Let us create a function in which one parameter is pre-defined and it can be defined again 

function prepower(base, exponent = 2) {
    let result = 1;
    for (let i = 1; i <= exponent; i++) {
        result *= base;
    }
    console.log(result);

}

prepower(2);
prepower(2, 4);

// Let us create another function 
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(24));

//Now let us create another function
function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}

printFarmInventory(7, 11);

// Let us create another function 

function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
}

function printFarmInventorySec(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventorySec(7, 11, 3);

//In this above code printFarmInventorySec we had used another function printZeroPaddedWithLabel

// Now let us create a program with single concept 
/*Let's begin */

function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function printFarmInventoryThird(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventoryThird(7, 16, 3);
