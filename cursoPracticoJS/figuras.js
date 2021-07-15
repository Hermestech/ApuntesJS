console.group("Cuadrados")
// const ladoCuadrado = 5;
// console.log(`Los lados del cuatrado miden: ${ladoCuadrado} cm`)

function perimetroCuadrado(lado){
    return lado * 4
} 
// console.log(`El perimetro del cuadrado es: ${perimetroCuadrado} cm`)

function areaCuadrado(lado){
    return lado * lado
}
// console.log(`El área del cuadrado es: ${areaCuadrado}cm^2`)
console.groupEnd();
//Código del triangulo
// console.group("Triángulos")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;


// console.log(`Los lados del triángulo miden: 
// ${ladoTriangulo1}cm,
// ${ladoTriangulo2}cm,
// ${baseTriangulo}cm,`
// )
// console.log(`La altura del triángulo es de: ${alturaTriangulo}`)



console.groupEnd();

console.group("Circulos")
// const radioCirculo = 4
// console.log(`El radio del circulo es: ${radioCirculo}`)

// const diametroCirculo = radioCirculo * 2;
// console.log(`El diametro del circulo es: ${diametroCirculo}`)

const PI = Math.PI;

function diametroCirculo(radio){
    return radio*2
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI
}

function areaCirculo(radio){
    return (radio * radio) * PI
}


// const areaCirculo = (radioCirculo * radioCirculo)*PI;
// console.log(`El área del circulo es: ${areaCirculo}`)


console.groupEnd();


//interactuar con HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area)
}

// function perimetroTriangulo(lado1, lado2, base){
//     return lado1 + lado2 + base;
// }

// const areaTriangulo = (base,altura) => {
//     return (base * altura)/2 
// }

// function calcularPerimetroTriangulo(){
//     const input = document.getElementById("InputTriangulo")
//     const value = input.value;

//     const perimetro = perimetroTriangulo(value)
//     alert(perimetro)
// }

// function calcularAreaTriangulo(){
//     const input = document.getElementById("InputTriangulo")
//     const value = input.value;

//     const area = areaTriangulo(value);
//     alert(area)
// }