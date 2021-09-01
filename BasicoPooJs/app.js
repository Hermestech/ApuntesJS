subGenero = ['Terror', 'suspenso', 'thriller']

genero = [subGenero, 'Accion', 'FX']


let peli1 = ['viernes 13',genero[0][0],1980]
let peli2 = ['Rambo', genero[1], 1982]
let peli3 = ['Avatar', genero[2], 2009]

let listaPeliculas = [peli1,peli2,peli3]

for(let i=0; i < listaPeliculas.length; i++){
    console.log(listaPeliculas[i])
}

console.log(peli1)

function sumarArreglo(numeros){
    if(numeros instanceof Array){
      let suma = numeros.reduce((acumulador, numero) => acumulador + numero)
   
      return suma;
    } else {
        throw TypeError('El argumento debe ser un array')
    }
}
try {
    console.log(sumarArreglo([1,2,3,4,5]))
} catch (error) {
    console.log(error.message)
}

let arreglo = new Array();
arreglo.push(3,5,9,13)
let suma = 0;

for(let i = 0; i < arreglo.length; i++){
    suma += arreglo[i];
}

console.log('La suma es: ' + suma)



function arrayPlusArray(array1, array2){
    let sum1 = 0;
    let sum2 = 0;

    for(let i = 0; i < array1.length; i++){
        sum1 = sum1 + array1[i]
    }
    for (let i = 0; i < array2.length; i++){
        sum2 = sum2 + array2[i]
    }

    return sum1 + sum2
}