// In this file we will add the code for the exercises of chapter 6 

// Question 1 : 
class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    //Adding add method
    plus(otherVec) {
        return new Vec(this.x + otherVec.x, this.y + otherVec.y);
    }

    //Adding method to subtract 
    minus(otherVec) {
        return new Vec(this.x - otherVec.x, this.y - otherVec.y);
    }

    //Getter to calculate the length 
    get length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
}

//Now we will give example 
let vec1 = new Vec(3, 4);
let vec2 = new Vec(1, 2);

console.log(vec1.plus(vec2));
console.log(vec1.minus(vec2));

console.log(vec1.length);

// Question 2 : 
class Group {
    constructor() {
        this.members = []; //Defining the empty array 
    }

    //Method to add the value to the group 
    add(value) {
        if (!this.has(value)) {
            this.members.push(value);
        }
    }

    //Defining the method to delete the value from the group 
    delete(value) {
        this.members = this.members.filter((member) => member !== value);
    }

    //Adding method to check if the value exists in the group
    has(value) {
        return this.members.includes(value);
    }

    //Defining the static method to create a group from an iterable
    static from(iterable) {
        let group = new Group();
        for (let value of iterable) {
            group.add(value);
        }
        return group;
    }

    // Custom iterator method using Symbol.iterator
    [Symbol.iterator]() {
        let index = 0;
        let members = this.members;

        return {
            next() {
                if (index < members.length) {
                    return {
                        value: members[index++],
                        done: false
                    };
                } else {
                    return {
                        done: true
                    };
                }
            }
        };
    }
}

//Examples 
let group = Group.from([10, 20, 30, 40]);
console.log(group.has(10));
console.log(group.has(50));
group.add(50);
console.log(group.has(50));
group.delete(10);
console.log(group.has(10));

// Question 3 :
// We added the required code in the question 2 