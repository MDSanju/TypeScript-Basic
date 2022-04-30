"use strict";
console.log("Hello World");
const arr = [12, 25, 45, 56];
const arr2 = ["Go", "Munia", "Sanju", "Canada", "Python"];
const mapping = arr.map((e) => e * 2);
console.log(mapping);
const arrowFunc = (aOne, aTwo) => {
    const res = aOne + aTwo;
    return res;
};
console.log(arrowFunc(5, 7));
console.log("Pakistan Zindabad!");
console.log("#mranKhan");
let playerNames;
playerNames = ["Afridi", "Babar Azam", "Imran Khan"];
console.log(playerNames.map((data) => data + ", He is only one!"));
function multiply(x, y) {
    const M = x * y;
    return M;
}
function callInsideIt(callBack) {
    console.log(callBack(2, 3));
}
callInsideIt(multiply);
// Array
let mixed = ["Bat", false, 5, 85, "Real"];
mixed.push({ name: "iPhone", price: 1200 });
// Array Union Types
const arrUnion = [];
// we can push only string/boolean/number inside this array.
// Object
const obj = { name: "Sanju", age: 25, isMale: true };
// It's only an object for string, number & boolean!
console.log("Male Gender:", obj.isMale);
// Object Union Types
let objUnion;
objUnion = { age: 25, name: "MD: Sanju", car: "Pazzaro" };
console.log("His Car:", objUnion.car);
// Function Type
let func1;
func1 = (x, y, z = 3) => {
    console.log(x * y * z);
};
func1(2, 3, 2);
const userDetails = (id, user) => {
    console.log(`User ID: ${id}, Name: ${user.name}, Age: ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? 'Sir' : 'Mr.'} ${user.name}`);
};
userDetails(12, { name: 'Sanju', age: 25 });
sayHello({ name: 'Todd', age: 51 });
// Function Signatures
let myFunc;
let add;
add = (ae, ps) => {
    const multiply = ae * ps;
    return multiply;
};
console.log(add(25, 6));
let calc;
calc = (ae, ps, color) => {
    if (color === 'black') {
        return ae + ps;
    }
    else {
        return ae - ps;
    }
};
console.log(calc(25, 6, 'black'));
let userInformations;
userInformations = (id, person) => {
    console.log(`User's ID: ${id}, Name: ${person.age > 50 ? 'SIR' : 'MR.'} ${person.name}, Age: ${person.age}`);
};
userInformations(6, { name: 'Sanju', age: 25 });
// TypeScript Classes
class ProgrammingLanguage {
    constructor(n, a, f, l) {
        this.name = n;
        this.age = a;
        this.framework = f;
        this.isHighLevel = l;
    }
    use(level) {
        console.log(`Use ${this.name} and ${this.framework} to build your next project! And this is a ${level} programming language!`);
    }
}
// Objects for the Class
const python = new ProgrammingLanguage('Python', 31, 'Django', true);
const java = new ProgrammingLanguage('Java', 27, 'Spring', true);
const c = new ProgrammingLanguage('C++', 42, 'Qt framework', false);
const javascript = new ProgrammingLanguage('JavaScript', 27, 'React', true);
python.use('High-Level');
java.use('High-Level');
c.use('Low-Level');
const languageP = [python, java, c];
languageP.push(javascript);
for (const e of languageP) {
    console.log(e.name);
}
