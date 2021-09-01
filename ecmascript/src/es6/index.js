function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

//es6
//Default Params
function newFunction2(name = 'Hermes', age = 25, country = "MX"){
    console.log(name, age, country);
};

newFunction2();
newFunction2("Jacqueline", "25", "MX")

//
let hello = "Hello";
let world = "World";

let epicPhrase = hello + " " + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2);



//spreadOperator

let team2 = ["Hermes", "Jackie", "Oscar"]
let team1 = ['Valeria', 'Yesica', 'Camila'] 

let education = ["David", ...team1, ...team2];

console.log(education);


//
let name = "Hermes";
let age = 32;

obj = {name: name, age: age};

obj2 = { name, age }
console.log(obj2)

//Arrow functions 

const names = [
    {name: "Hermes", age: 25},
    {name: "Jackie", age: 25}
]

let listOfNames = names.map(function(item){
    console.log(item.name)
})
let listOfNames2 = names.map(item => console.log(item.name))

// const listOfNames3 = (name, age, country) => {
//     ...
// }

// const listOfNames4 = name => {
//     c
// }
let num = 5;

const square = num => num * num;

const helloPromise = () => {
    return new Promise((resolve, reject) =>{
        if (true) {
            resolve('Hey!')
        } else {
            reject('ups!')
        }
    })
}


helloPromise();
    .then(response => console.log(response));
    .catch(error => console.log(error));