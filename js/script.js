import { Laptop } from "./classes/Laptop.js";
import { Ghost } from "./classes/Ghost.js";
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
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
};
userDetails(12, { name: "Sanju", age: 25 });
sayHello({ name: "Todd", age: 51 });
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
    if (color === "black") {
        return ae + ps;
    }
    else {
        return ae - ps;
    }
};
console.log(calc(25, 6, "black"));
let userInformations;
userInformations = (id, person) => {
    console.log(`User's ID: ${id}, Name: ${person.age > 50 ? "SIR" : "MR."} ${person.name}, Age: ${person.age}`);
};
userInformations(6, { name: "Sanju", age: 25 });
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
const python = new ProgrammingLanguage("Python", 31, "Django", true);
const java = new ProgrammingLanguage("Java", 27, "Spring", true);
const c = new ProgrammingLanguage("C++", 42, "Qt framework", false);
const javascript = new ProgrammingLanguage("JavaScript", 27, "React", true);
python.use("High-Level");
java.use("High-Level");
c.use("Low-Level");
const languageP = [python, java, c];
languageP.push(javascript);
for (const e of languageP) {
    console.log(e.name);
}
// TypeScript Access Modifiers in Class (Now we can't be able to access the calss's properties from outside of the class. It just get access within the class)
// Note: public property will be able to access and change from outside the class, private property will not be able to access or change from outside of the class, but readonly property will get access from outside but we can't change the value of the readonly property from outside of the class.
class Result {
    constructor(sub, got, highest) {
        this.subjectName = sub;
        this.marks = got;
        this.highestMarks = highest;
    }
    getRes() {
        console.log(`Subject: ${this.subjectName} - Marks: ${this.marks} - Highest: ${this.highestMarks}!`);
    }
}
const math = new Result("Math", 80, 100);
const english = new Result("English", 95, 95);
math.getRes();
english.getRes();
// When we use the Access Modifiers for all class properties, that time we can use this shortcut way as well
class PC {
    constructor(nameOfPC, price, configuration) {
        this.nameOfPC = nameOfPC;
        this.price = price;
        this.configuration = configuration;
    }
    detailsPC() {
        console.log(`PC: ${this.nameOfPC}, Price: ${this.price}, Configurations: ${this.configuration}!`);
    }
}
const macbookPro = new PC("Apple Macbook", 300000, "Core I9");
macbookPro.detailsPC();
// TypeScript Class Module System
const hp = new Laptop("Hp", "Core i5", 14, false, 36000);
hp.configuration();
// Another Object created below through the Class from Laptop.js
const apple = new Laptop("MacBook Pro", "quad-core Intel Core i7", 14, true, 7000);
apple.configuration();
// Again making an Object
const dell = new Laptop("Dell XPS 13", "Intel Core i5", 16, true, 2200);
dell.configuration();
const drawRect = (size) => {
    let width = size.width;
    let length = size.length;
    console.log(width * length);
};
drawRect({
    width: 30,
    length: 20,
});
// Interface with JS Class
const umarGulMama = new Ghost("Umar Gul", 5027, "Koye-Kahaf", true, 12, "June");
umarGulMama.ghostInfo();
// Another one in another way
let gemarfulMama;
gemarfulMama = new Ghost("Gemarful", 3089, "Koye-Kahaf", false, 7, "August");
gemarfulMama.ghostInfo();
// Uses of Generics with a function
const addId = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addId({
    name: "Evil Dead",
    type: "Ghost",
    age: 2377,
});
// let user = {
//   name: "Evil Dead",
//   type: "Ghost",
//   age: 2377,
// }
// addId(user)
console.log(user.id);
const res01 = {
    status: 200,
    type: "Good",
    data: {
        name: "Sanju",
        roll: 19,
        class: 10,
        isMarried: true,
    }
};
console.log(res01.data.roll);
// ENUM Types
var ResType;
(function (ResType) {
    ResType[ResType["SUCCESS"] = 0] = "SUCCESS";
    ResType[ResType["FAILURE"] = 1] = "FAILURE";
    ResType[ResType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    ResType[ResType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(ResType || (ResType = {}));
const res02 = {
    status: 404,
    type: ResType.UNAUTHENTICATED,
};
console.log(res02.type);
// TUPLES (only used for Array, and in tuple the array element's order is important)
const tupleArr = [3, "Success", { name: "sanSanju", age: 26, isMarrid: true }];
// But you can push or pop anything else, just can't break the order's type! (But note is, we never do push or pop in tuple, cause the it should be fixed the types and elements of tuple, so in this scense, doing push or pop in tuple in unnecessary, no needed!)
tupleArr.push([1, 2, 3]);
tupleArr.forEach(e => console.log(e));
// Union Data-Type with Functions
const uniFunc = (userId) => {
    console.log(`Your ID NO: ${userId}`);
};
uniFunc("05");
// Array Data-Type
// Different way to declare an Array Types
let userNames; // let userName: string[]; -- both are same just the syntax is different!
userNames = ["San", "Kayel", "Bob"];
const sortedUserNames = userNames.sort();
sortedUserNames.forEach(userName => console.log(userName));
