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
