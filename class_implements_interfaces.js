var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("".concat(this.name, " is ").concat(this.age, " years old."));
    };
    return Person;
}());
var userProfile = new Person("Pralay", 24);
userProfile.greet();
