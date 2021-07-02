const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(10);

const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
};

let myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(4);

function iniciar(){
    let nombre ="mozzilla";
    function mostrarNombre(){
        console.log(nombre);
    }
    mostrarNombre();
}
iniciar();

function creaFunc() {
    var nombre = "Mozilla";
    function muestraNombre() {
      console.log(nombre);
    }
    return muestraNombre;
  }
  
(function(){
  let color = "green";

  function printColor(){
      console.log(color);
  }
  printColor();
})();

function makeColorPrinter(color){
    let colorMessage = `The color is ${color}`;
    return function(){
        console.log(colorMessage)
    }
}
let greenColorPrinter = makeColorPrinter("green");
console.log(greenColorPrinter());
// imprimiendo nombres con closures
function doyTuNombre(prefix, nombre){
    let count = 1;
    let nombreMensaje = `${prefix}! Tu nombre es ${nombre}`;
    return function(){
        console.log(`${nombreMensaje} eres el número: ${count++}`);
    }
}
let imprimiendoTuNombre = doyTuNombre();
console.log(imprimiendoTuNombre());
console.log(imprimiendoTuNombre());



let imprimiendoTuNombre1 = doyTuNombre("Jacqueline");
console.log(imprimiendoTuNombre1());



const counter = {
    count: 3
}

console.log(counter.count);

function makeCounter(n){
    let count = n;

    return {
        increase: function(){
            count = count + 1;
        },
        decrease: function(){
            count = count - 1;
        },
        getCount: function(){
            return count;
        },
    }
}

let counter = makeCounter(7);

console.log("The count is:", counter.getCount());
counter.increase();
console.log("The count is:", counter.getCount());
counter.decrease();
counter.decrease();
counter.decrease();
counter.decrease();
counter.decrease();
console.log("The count is:", counter.getCount());




var user = function(id){
    function getUserFromApi(){
        return{
            id:10,
            name: "Eduardo",
            lastanme: "Rodriguez Patinño",
            email: "erodriguez105@gmail.com"
        };
    }

    var data = getUserFromApi(id);

    return {
        data: data,
        sayHello: function(){
            return "Hi, I am" + data.name;
        }
    };
}(10);

function closureGreeting(prefix){
    var count = 0;
    return function(name){
      count += 1;
      return prefix + " " + name + ", you are number " + count;
    }
}

var hiGreeting = closureGreeting("Hi");
var helloGreeting = closureGreeting("Hello");

hiGreeting("Franco")
hiGreeting("Hermes")