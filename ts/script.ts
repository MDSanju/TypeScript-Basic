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

function callInsideIt(callBack: any): void {
  console.log(callBack(2, 3));
}

callInsideIt(multiply);