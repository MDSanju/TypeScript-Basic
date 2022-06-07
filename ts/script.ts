import { Laptop } from "./classes/Laptop.js";
import { Ghost } from "./classes/Ghost.js";
import { GhostInt } from "./interfaces/GhostInt.js";

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

// Type Aliases

type stringOrNumber = string | number;
type userType = { name: string; age: number };

const userDetails = (id: stringOrNumber, user: userType) => {
  console.log(`User ID: ${id}, Name: ${user.name}, Age: ${user.age}`);
};

const sayHello = (user: userType) => {
  console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
};

userDetails(12, { name: "Sanju", age: 25 });
sayHello({ name: "Todd", age: 51 });

// Function Signatures

let myFunc: () => void;
let add: (x: number, y: number) => number;

add = (ae: number, ps: number) => {
  const multiply = ae * ps;
  return multiply;
};

console.log(add(25, 6));

let calc: (prOne: number, prTwo: number, prThree: string) => number;

calc = (ae: number, ps: number, color: string) => {
  if (color === "black") {
    return ae + ps;
  } else {
    return ae - ps;
  }
};

console.log(calc(25, 6, "black"));

let userInformations: (
  id: number | string,
  userInfo: { name: string; age: number }
) => void;

userInformations = (
  id: string | number,
  person: { name: string; age: number }
) => {
  console.log(
    `User's ID: ${id}, Name: ${person.age > 50 ? "SIR" : "MR."} ${
      person.name
    }, Age: ${person.age}`
  );
};

userInformations(6, { name: "Sanju", age: 25 });

// TypeScript Classes

class ProgrammingLanguage {
  name: string;
  age: number;
  framework: string;
  isHighLevel: boolean;

  constructor(n: string, a: number, f: string, l: boolean) {
    this.name = n;
    this.age = a;
    this.framework = f;
    this.isHighLevel = l;
  }

  use(level: string) {
    console.log(
      `Use ${this.name} and ${this.framework} to build your next project! And this is a ${level} programming language!`
    );
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

const languageP: ProgrammingLanguage[] = [python, java, c];
languageP.push(javascript);

for (const e of languageP) {
  console.log(e.name);
}

// TypeScript Access Modifiers in Class (Now we can't be able to access the calss's properties from outside of the class. It just get access within the class)
// Note: public property will be able to access and change from outside the class, private property will not be able to access or change from outside of the class, but readonly property will get access from outside but we can't change the value of the readonly property from outside of the class.

class Result {
  public subjectName: string;
  private marks: number;
  readonly highestMarks: number;

  constructor(sub: string, got: number, highest: number) {
    this.subjectName = sub;
    this.marks = got;
    this.highestMarks = highest;
  }

  getRes() {
    console.log(
      `Subject: ${this.subjectName} - Marks: ${this.marks} - Highest: ${this.highestMarks}!`
    );
  }
}

const math = new Result("Math", 80, 100);
const english = new Result("English", 95, 95);

math.getRes();
english.getRes();

// When we use the Access Modifiers for all class properties, that time we can use this shortcut way as well

class PC {
  constructor(
    public nameOfPC: string,
    private price: number,
    readonly configuration: string
  ) {}

  detailsPC() {
    console.log(
      `PC: ${this.nameOfPC}, Price: ${this.price}, Configurations: ${this.configuration}!`
    );
  }
}

const macbookPro = new PC("Apple Macbook", 300000, "Core I9");

macbookPro.detailsPC();

// TypeScript Class Module System

const hp = new Laptop("Hp", "Core i5", 14, false, 36000);

hp.configuration();

// Another Object created below through the Class from Laptop.js
const apple = new Laptop(
  "MacBook Pro",
  "quad-core Intel Core i7",
  14,
  true,
  7000
);
apple.configuration();

// Again making an Object

const dell = new Laptop("Dell XPS 13", "Intel Core i5", 16, true, 2200);
dell.configuration();

// TypeScript Interfaces *(vary-vary important)

interface RectangleSize {
  width: number;
  length: number;
}

const drawRect = (size: RectangleSize) => {
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

let gemarfulMama: GhostInt;
gemarfulMama = new Ghost("Gemarful", 3089, "Koye-Kahaf", false, 7, "August");
gemarfulMama.ghostInfo();



// Uses of Generics with a function

const addId = <T extends {
  name: string;
  type: string;
  age: number;
}>(obj: T) => {
  let id = Math.floor(Math.random() * 100);

  return {...obj, id};
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
