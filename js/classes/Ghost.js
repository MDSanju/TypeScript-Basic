// Shortcut way to write a TypeScript Class
export class Ghost {
    constructor(name, age, country, wife, dateOfDead, monthOfDead) {
        this.name = name;
        this.age = age;
        this.country = country;
        this.wife = wife;
        this.dateOfDead = dateOfDead;
        this.monthOfDead = monthOfDead;
    }
    getPrivateProperties() {
        return this.dateOfDead, this.monthOfDead;
    }
    ghostInfo() {
        console.log(`He is ${this.name} Mama! He is a ${this.wife ? "married ghost" : "single ghost"}. He lives in ${this.country}. And he is ${this.age} years old! Finally, the Date of his Dead and becoming a ghost is: ${this.dateOfDead} of ${this.monthOfDead}.`);
    }
}
