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
