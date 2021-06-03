/* 21) Programa una función que dado un array numérico devuelve 
otro array con los números elevados al cuadrado, 
pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/

/* const arrayAlCuadrado = (array = []) =>{

    if(array.forEach((el) => array[el] === undefined)) return console.warn("No has introducido datos")

    //forEach((el,i) function) el = contenido, i = índice del array, function = forEach recibe una función
    array.forEach((el,i) => array[i]=Math.pow(el,2))
    console.info(array) 
}

arrayAlCuadrado([])
arrayAlCuadrado([2,3,4]) */




/*22) Programa una función que dado un array devuelva el número 
mas alto y el más bajo de dicho array, 
pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/

/* const arrayMinMax = (array = []) =>{

    //if(array.forEach((el) => array[el] === undefined)) return console.warn("No has introducido datos")

    //sort((a,b) function) a = primer valor del array (y siguientes), b = segundo valor del array, function = sort() recibe una función
    array.sort((a,b) => { //pasamos a sort dos valores
        return b-a        //en la función, retornamos la resta de b - a para obtener un mayor a menor (a-b sería menor a mayor)
    })

    console.info(`El número mayor es ${array[0]} y el menor ${array[array.length - 1]}`) 
}

//arrayMinMax([])
arrayMinMax([2, 30, 13, -60, 99, 120, 43, -73]) */


/*23) Programa una función que dado un array de números devuelva 
un objeto con 2 arreglos en el primero almacena los 
números pares y en el segundo los impares, 
pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) 
devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */

const arrayAObjeto = (array = []) =>{

    //if(array.forEach((el) => array[el] === undefined)) return console.warn("No has introducido datos")

    //forEach((el,i) function) el = contenido, i = índice del array, function = forEach recibe una función
    const miobjeto = {
        pares: [],
        impares: []
    }
    
    array.forEach((el) => { //recorro el array con forEach y con la función evalúo
        if(array[el] % 2 === 0){ //si el resto es 0, es par
             miobjeto.pares.push(el) //ponlo en la última posición libre del array pares dentro del objeto
        }else if(array[el] % 2 !== 0){//si el resto es distinto a 0, es impar
            miobjeto.impares.push(el)//ponlo en la última posición libre del array impares dentro del objeto
        }
    })
    //console.info(`Array pares = ${miobjeto.pares} y el Array impares = ${miobjeto.impares}`)
    console.info(miobjeto)
}

//arrayAlCuadrado([])
arrayAObjeto([2,3,4, 74, 112, 57, 91, 1024, 253]) 