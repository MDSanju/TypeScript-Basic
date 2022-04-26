console.log("Hello World");

const arr: number[] = [12, 25, 45, 56];
const arr2: string[] = ["Go", "Munia", "Sanju", "Canada", "Python"];

const mapping: number[] = arr.map((e) => e * 2);

console.log(mapping);

const arrowFunc = (aOne: number, aTwo: number) => {
  const res: number = aOne + aTwo;

  return res;
};

console.log(arrowFunc(5, 7));

console.log("Pakistan Zindabad!");

console.log("#mranKhan");

let playerNames: string[];

playerNames = ["Afridi", "Babar Azam", "Imran Khan"];

console.log(playerNames.map((data) => data + ", He is only one!"));

function multiply(x: number, y: number): number {
  const M = x * y;
  return M;
}

function callInsideIt(callBack: Function): void {
  console.log(callBack(2, 3));
}

callInsideIt(multiply);

// Array

let mixed: any = ["Bat", false, 5, 85, "Real"];

mixed.push({ name: "iPhone", price: 1200 });

// Array Union Types

const arrUnion: (string | boolean | number)[] = [];
// we can push only string/boolean/number inside this array.

// Object

const obj = { name: "Sanju", age: 25, isMale: true };
// It's only an object for string, number & boolean!

console.log("Male Gender:", obj.isMale);

// Object Union Types

let objUnion: { name?: string; age?: number; isMale?: boolean; car: string };

objUnion = { age: 25, name: "MD: Sanju", car: "Pazzaro" };

console.log("His Car:", objUnion.car);

// Function Type

let func1: Function;

func1 = (x: number, y: number, z: number = 3) => {
  console.log(x * y * z);
};

func1(2, 3, 2);