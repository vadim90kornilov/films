const person = {
    name: 'Vadim',
    surname: 'Kornilov',
    age: 32,
    sayHello() {
        console.log("I'am web-developer");
    }
};

const json = JSON.stringify(person);
console.log(json);
person.sayHello();

const person2 = Object.assign({},person);
person.children = {
    name: 'Evelina',
    age: 4
};
console.log(person2);
console.log(person);

function printName(...args) {
    console.log(args);
}
printName(2000);