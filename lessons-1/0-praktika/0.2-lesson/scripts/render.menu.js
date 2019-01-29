//ES6

class Person {
    constructor(name, yearOfBirth){
        this.name = name;
        this. yearOfBirth = yearOfBirth;
    }
    calcAge(){
        console.log(new Date().getFullYear() - this.yearOfBirth);
    }
    sayHi(){
        return `${this.name} says hi`;
    }

}

class Teacher extends Person {
    constructor(name, yearOfBirth, subject) {
        super(name, yearOfBirth);
        this.subject = subject;
    }
    sayHi(){
        return `${super.sayHi()} as teacher`; // принцип полиморфизма
    }
    static triple(x){
        if (x === undefined){
            x = 2;
        }
        return x * 3;
    }
}


var john = new Person('John', 1992);
var ann = new Teacher('Ann', 1980);


console.log(Person.triple(3));







/*
//ES5

function Person(name, yearOfBirth) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
}

Person.prototype.calcAge = function(){
    console.log(new Date().getFullYear() - this.yearOfBirth);
};

function Teacher(name, yearOfBirth, subject){
    Person.call(this, name, yearOfBirth);
    this.subject = subject;
}

//Teacher.prototype = Person.prototype;
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;


var john = new Person('John', 1992);
var ann = new Teacher('Ann', 1980, 'math');
*/