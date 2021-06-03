/* 21) Programa una función que dado un array numérico devuelve 
otro array con los números elevados al cuadrado, 
pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/

/* const devolverCuadrados = (arr = undefined) =>{
    if(arr === undefined) return console.warn("No has introducido un Array")

    if(!(arr instanceof Array)) return console.error("No es un Array lo que has introducido")

    //comprobamos si hay elementos, si no los hay, length será 0, por lo tanto, estará vacío
    if(arr.length === 0) return console.error("El Array está vacío")

    //necesitamos ver que todos los elementos sean números
    for (let num of arr) {
        if(typeof num !== "number") return console.error(`El valor de ${num} no es un número`)
    }

    //map() itera un array y genera un nuevo array a partir del original, recibe el elemnto
    const newArr = arr.map(el => el * el)

    console.info(`El Array original = ${arr}\nEl Array elevado al cuadrado ${newArr}`)
}

devolverCuadrados()
devolverCuadrados([])
devolverCuadrados([1, 2, 3, "hola", 4])
devolverCuadrados([1,2,3,4,5,6,7,8,9]) */




/*22) Programa una función que dado un array devuelva el número 
mas alto y el más bajo de dicho array, 
pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/


/* const arrayMinMax = (arr = undefined) =>{
    if(arr === undefined) return console.warn("No has introducido un Array")

    if(!(arr instanceof Array)) return console.error("No es un Array lo que has introducido")

    //comprobamos si hay elementos, si no los hay, length será 0, por lo tanto, estará vacío
    if(arr.length === 0) return console.error("El Array está vacío")

    //necesitamos ver que todos los elementos sean números
    for (let num of arr) {
        if(typeof num !== "number") return console.error(`El valor de ${num} no es un número`)
    }

    //Math.max() tiene que recibir el array en una expresión Spread Operator ...Variable
    console.info(`Array original ${arr}\nValor mayor ${Math.max(...arr)}\nValor menor ${Math.min(...arr)}`)
}

arrayMinMax()
arrayMinMax([])
arrayMinMax([1, 2, "A", {}])
arrayMinMax([1,4,5,99,-60]) */



/*23) Programa una función que dado un array de números devuelva 
un objeto con 2 arreglos en el primero almacena los 
números pares y en el segundo los impares, 
pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) 
devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */

const serpararParesImpares = (arr = undefined) =>{
    if(arr === undefined) return console.warn("No has introducido un Array")

    if(!(arr instanceof Array)) return console.error("No es un Array lo que has introducido")

    //comprobamos si hay elementos, si no los hay, length será 0, por lo tanto, estará vacío
    if(arr.length === 0) return console.error("El Array está vacío")

    //necesitamos ver que todos los elementos sean números
    for (let num of arr) {
        if(typeof num !== "number") return console.error(`El valor de ${num} no es un número`)
    }

    return console.info({

        //.filter() filtra según la función indicada y lo devuelve en formato de array
        pares: arr.filter(arr => arr % 2 === 0),
        impares: arr.filter(arr => arr % 2 === 1)
    })
}

serpararParesImpares()
serpararParesImpares([])
serpararParesImpares(false)
serpararParesImpares([0,1,2,3,4,5,6,7,8,9])