console.log("Hello World");
var arr = [12, 25, 45, 56];
var arr2 = ["Go", "Munia", "Sanju", "Canada", "Python"];
var mapping = arr.map(function (e) { return e * 2; });
console.log(mapping);
var arrowFunc = function (aOne, aTwo) {
    var res = aOne + aTwo;
    return res;
};
console.log(arrowFunc(5, 7));
