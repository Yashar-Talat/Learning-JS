var person = {
    name: "Yashar",
    lastName: "Talat",
    age: 20
};
console.log(person);

//Construtor Structure
class Person {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.fullName = function () {
            return this.name + this.lastName;
        };
    }
    constructor() {}
}
console.log(new Person("Amin", "Talat", 25));

let people = [new Person("sahar", "sadi", 35), new Person("Ata", "Faragiiii", 22), new Person("fatemeh", "talat", 20), new Person("Yashar", "Talat", 20)];

console.log(people);