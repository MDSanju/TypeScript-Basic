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




// Generics uses for Interface

interface APIResponse<T> {
  status: number;
  type: string;
  data: T;
}

const res01: APIResponse<{name: string; roll: number; class: number; isMarried: boolean}> = {
  status: 200,
  type: "Good",
  data: {
    name: "Sanju",
    roll: 19,
    class: 10,
    isMarried: true,
  }
}

console.log(res01.data.roll);

// ENUM Types

enum ResType {
  SUCCESS,
  FAILURE,
  UNAUTHENTICATED,
  FORBIDDEN,
}

interface AuthRes {
  status: number;
  type: ResType;
}

const res02: AuthRes = {
  status: 404,
  type: ResType.UNAUTHENTICATED,
};

console.log(res02.type);



// TUPLES (only used for Array, and in tuple the array element's order is important)

const tupleArr:[number, string, object] = [3, "Success", {name: "sanSanju", age: 26, isMarrid: true}];

// But you can push or pop anything else, just can't break the order's type! (But note is, we never do push or pop in tuple, cause the it should be fixed the types and elements of tuple, so in this scense, doing push or pop in tuple in unnecessary, no needed!)
tupleArr.push([1, 2, 3]);

tupleArr.forEach(e => console.log(e));


// Union Data-Type with Functions

const uniFunc = (userId: string | number) => {
  console.log(`Your ID NO: ${userId}`);
  
}

uniFunc("05");

// Array Data-Type
// Different way to declare an Array Types
let userNames: Array<string>; // let userName: string[]; -- both are same just the syntax is different!

userNames = ["San", "Kayel", "Bob"];
const sortedUserNames = userNames.sort();

sortedUserNames.forEach(userName => console.log(userName));

// Tuple Data Types

interface wife {
  name: string;
  height: string;
  age: number;
  isWhite: boolean;
}

let tupleDataTypes: [string, boolean, number, wife];

tupleDataTypes = ['Sanju', true, 26, {name: "Munia", height: "5 feet 3 inch", age: 23, isWhite: true}];

console.log(`His name: ${tupleDataTypes[0]}, Age: ${tupleDataTypes[2]}, He is ${tupleDataTypes[1] === true ? "Married" : "unmarried"}, His wife is ${tupleDataTypes[3].name}. Her age: ${tupleDataTypes[3].age} and height: ${tupleDataTypes[3].height}.`);


// Enum Data Types

// Numeric Enum --
enum UserReq {
  ReadData,
  SaveData,
  DeleteData,
  GetData,
}
// started from 0 index
console.log(UserReq);

enum UserReqTwo {
  ReadData = 1,
  SaveData,
  DeleteData,
  GetData,
}

// it will start from 1 index, that is the difference between these 2 kinds of enums
console.log(UserReqTwo);

// More different rule

enum UserReqThree {
  ReadData = 1,
  SaveData = 5,
  DeleteData = 8,
  GetData,
}

console.log(UserReqThree);
console.log(UserReqThree.DeleteData);


// String Enum

enum StringEnumType {
  ReadData = "READ_DATA",
  SaveData = "SAVE_DATA",
  DeleteData = "DELETE_DATA",
  GetData = "GET_DATA",
}

console.log(StringEnumType.GetData);
console.log(StringEnumType["DeleteData"]);


// Hetergenous Enum

enum RequestTypeHete {
  ReadData = "READ_DATA",
  SaveData = "SAVE_DATA",
  DeleteData = "DELETE_DATA",
  GetData = "GET_DATA",
  id = 101,
}

console.log(RequestTypeHete.id);
console.log(RequestTypeHete.SaveData);



// Custom Type
type RequestType = "GET" | "POST";

let getRequest: RequestType;
getRequest = "GET";
console.log(getRequest);


const postRequest = (params: RequestType) => {
  const post = params;
  console.log(post);
}

postRequest('POST');



// Class Types
class Bottle {
  constructor(
    public liter: number,
    public company: string,
    public whatFor: string,
    public color: string,
    public price: number
  ){}

  theBottle() {
    console.log(`This is a ${this.whatFor} Bottle! Company Name: ${this.company}, Size: ${this.liter} liters! Price: ${this.price}/=.`);
  }
}

const spa = new Bottle(2, 'Spa', 'Water', 'Transparent', 25);
spa.theBottle();


interface NoodlesType {
  name: string;
  size: number;
  price: number;
}

class NoodlesPack implements NoodlesType {
  name: string;
  size: number;
  price: number;

  constructor(name: string, size: number, price: number){
    this.name = name;
    this.size = size;
    this.price = price;
  }

  mFunc(){
    console.log(`Noodles name ${this.name}! Price: ${this.price}/=`);
  }
}

const magi = new NoodlesPack('Magi Noodles', 250, 15);
magi.mFunc();



// Class Inheritance in TypeScript
class CommonClass {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  commonFunc () : void {
    console.log(`Name: ${this.name}. Age: ${this.age}.`);
  }
}

// Inherit Class
class Student extends CommonClass {
  studentId: number;

  constructor(name: string, age: number, studentId: number) {
    super(name, age);
    this.studentId = studentId;
  }
}

const student1 = new Student('Sanju', 25, 1);
student1.commonFunc();