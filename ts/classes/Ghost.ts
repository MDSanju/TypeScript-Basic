import { GhostInt } from "../interfaces/GhostInt.js";

// Shortcut way to write a TypeScript Class
export class Ghost implements GhostInt {
  constructor(
    public name: string,
    public age: number,
    public country: string,
    readonly wife: boolean,
    private dateOfDead: number,
    private monthOfDead: string
  ) {}

  getPrivateProperties() {
    return this.dateOfDead, this.monthOfDead;
  }

  ghostInfo() {
    console.log(
      `He is ${this.name} Mama! He is a ${
        this.wife ? "married ghost" : "single ghost"
      }. He lives in ${this.country}. And he is ${
        this.age
      } years old! Finally, the Date of his Dead and becoming a ghost is: ${
        this.dateOfDead
      } of ${this.monthOfDead}.`
    );
  }
}
