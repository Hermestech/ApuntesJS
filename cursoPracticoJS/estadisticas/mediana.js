function calcularPromedio(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

const lista1 = [
    100,
    200,
    500,
    400000000,
]

const mitadLista = parseInt(lista1.length / 2);

function esPar(numerito){
    if (numerito % 2 === 0){
        return true;
    } else {
        return false
    }
}

function calcularMediana(array){

    

    const listaOrdenada = array.sort((a, b) => a - b)

    if(esPar(listaOrdenada.length)){
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista]
    
        const promedioElemento1y2 = calcularPromedio([
            elemento1,
            elemento2,

        ]);
    
        mediana = promedioElemento1y2;
        return mediana
    } else {
        mediana = lista1[mitadLista]
        return mediana
    }
}
