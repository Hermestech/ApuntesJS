const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    4,
    2,
    2,
    2,
    2,
    1
]

function calcularModa(array){
    const arrayCount = {};
    
    array.map(
        function(elemento){
            if(arrayCount[elemento]){
                arrayCount[elemento] += 1;
            } else {
                arrayCount[elemento] = 1;
            }
        }
    );

    const arrayToArray = Object.entries(arrayCount).sort(
        function(elementoA, elementoB){
            return elementoA[1] - elementoB[1]
        }
    );
    
    const moda = arrayToArray[arrayToArray.length - 1];
    return moda;
    
}


