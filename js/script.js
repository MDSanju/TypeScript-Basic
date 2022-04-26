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
