const buildCount = (i) =>{
    let count = i;
    const displayCount = () =>{
        console.log(count++);
    };
    return displayCount;
}

const myCount = buildCount(1);
myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();

function countBuild(i, name){
    let count = i;
    function countDisplay(){
        console.log(`Hola ${name} eres el número ${count++}`)
    }
    return countDisplay;
}

const count = countBuild(1, "hermes");
count();
count();
count();




function crearContador(name){
    let contador = 0;

    return function incrementar(){
        contador = contador + 1;
        console.log(contador);
    }
}

const contador1 = crearContador();
contador1();
contador1();
contador1();
const contador2 = crearContador();
contador2();
contador2();


function closureGreetin(prefix){
    let count = 1;
    function countDisplay(name){
        console.log(`${prefix} ${name} eres el número ${count++}`)
        return countDisplay;
    }
}

const funcion = closureGreetin("Hi", "hermes");
funcion();
funcion();
funcion();