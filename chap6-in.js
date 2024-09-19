// In this chapter We will add the textual question of chapter 6

let rabbit = {};
rabbit.speak = function (line) {
    console.log(`The rabbit says '${line}'`);
};

rabbit.speak("I am alive !");



//Now we will add another function 
function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = {
    type: "white",
    speak
};

let hungryRabbit = {
    type: "hungry",
    speak
};

whiteRabbit.speak("Oh my ears and whiskers," + "how late it's getting!");

hungryRabbit.speak("I could use a carrot right now ");

speak.call(hungryRabbit, "Burp");

function normalise() {
    console.log(this.coords.map(n => n / this.length));
}

normalise.call({
    coords: [0, 2, 3],
    length: 5
});

let empty = {};
console.log(empty.toString);
console.log(empty.toString());

console.log(Object.getPrototypeOf({}) == Object.prototype);

console.log(Object.getPrototypeOf(Object.prototype));

console.log(Object.getPrototypeOf(Math.max) == Function.prototype);

console.log(Object.getPrototypeOf([]) == Array.prototype);

let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};

let weirdrabbit = new Rabbit("weird");

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
console.log(Object.getPrototypeOf(weirdrabbit) == Rabbit.prototype);

// Now we will understand class notation 
class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says ${line}`);
    }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

let ob = new class {
    getword() {
        return "Hello";
    }
};

console.log(ob.getword());

// In above code we used function inside the class 

console.log(Array.prototype.toString == Object.prototype.toString);

console.log(Object.prototype.toString.call([1, 2]));

// Let us understand Maps 
let ages = {
    Boris: 39,
    Liang: 22,
    Julia: 62
}

console.log(`Julia is ${ages["Julia"]}`);

console.log("Is Jack's age known?", "Jack" in ages);

//Now we will use another way to define Map 
let ages2 = new Map()
ages.set = ("Johnathan", 39);
ages.set = ("Liang", 42);
ages.set = ("Rahul", 35);


console.log(ages.has("toString"));

console.log({ x: 1 }.hasOwnProperty("x"));

console.log({ x: 1 }.hasOwnProperty("toString"));

// Let us understand Polymorphism 

Rabbit.prototype.toString = function () {
    return `a ${this.type} rabbit`;
}

console.log(String(blackRabbit));

// Symbols 

let sym = Symbol("Name : ");
console.log(sym == Symbol("name"));

Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function () {
    return `${this.length} cm of blue yarn`;
};

console.log([1, 2][toStringSymbol]());

let stringObject = {
    [toStringSymbol]() {
        return "a jute rope";
    }
};

console.log(stringObject[toStringSymbol]());


//Now let us understand Iterator Interface
let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());

console.log(okIterator.next());

console.log(okIterator.next());

//Now let us implement iterable data types 

class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y);
            }
        }
    }

    get(x, y) {
        return this.content[y * this.width + x];
    }
    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }
}

class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next() {
        if (this.y == this.matrix.height) {
            return {
                done: true
            }
        }
        let value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x, this.y)
        };
        this.x++;
        if (this.x == this.matrix.width) {
            this.x = 0;
            this.y++;
        }
        return {
            value,
            done: false
        };
    }
}

Matrix.prototype[Symbol.iterator] = function () {
    return new MatrixIterator(this);
}

let matrix = new Matrix(2, 2, (x, y) => `value ${x} , ${y}`);
for (let { x, y, value } of matrix) {
    console.log(x, y, value);
}

let varyingSize = {
    get size() {
        return Math.floor(Math.random() * 100);
    }
};

console.log(varyingSize.size);
console.log(varyingSize.size);



//Let's understand setter 
class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    get farenheit() {
        return this.celsius * 1.8 + 32;
    }
    set farenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }
    static fromFarenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
}

let temp = new Temperature(22);
console.log(temp.farenheit);

temp.farenheit = 86;
console.log(temp.celsius);


//Now we will understand the Inheritance 

class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) => undefined) {
        super(size, size, (x, y) => {
            if (x < y) {
                return element(y, x);
            } else {
                return element(x, y);
            }
        });
    }

    set(x, y, value) {
        super.set(x, y, value);
        if (x != y) {
            super.set(y, x, value);
        }
    }
}

let msatrix = new SymmetricMatrix(5, (x, y) => `${x} , ${y}`);
console.log(msatrix(2, 3));

// Now we will understand about instanceof operator 
console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix);

console.log(new SymmetricMatrix(2) instanceof Matrix);

console.log(new Matrix(2, 2) instanceof SymmetricMatrix);

console.log([1] instanceof Array);
