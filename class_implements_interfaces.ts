
interface personInterface{
    name : string;
    age : number;
    greet() : void;
}

class Person implements personInterface {
    name : string;
    age : number;
    
    constructor(name : string, age : number){
        this.name = name;
        this.age = age;
    }
    greet(): void {
        console.log(`${this.name} is ${this.age} years old.`);   
    }
}

const userProfile : Person = new Person("Pralay", 24);
userProfile.greet();