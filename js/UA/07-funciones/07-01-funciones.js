/*
miFuncion(3, 7)

function miFuncion(a, b) {

    console.log(arguments.length);
    console.log('suma ' + (a + b));
}

miFuncion(2, 3);
*/

/******  ****** ******* ******* ********
//longitud de argumentos = 3
function funcionDos(a, b, c) {
    console.log(arguments.length); 
    return a + b + c;
}
let resultado = funcionDos(3, 3, 3);
console.log(resultado);
*/

/*

//declaración de funcion tipo expresión (sin nombre)
let suma = function name(a, b, c) { return a + b + c };
resultado = suma(9, 9, 9);
console.log(resultado);

 



let function name(params) {
    
}


//función self invoke, se manda a llamar a si misma una sola vez
(function nme(a, b, c) {
    console.log("run fn autoinvoke. sum = " + (a + b + c));
})(3, 3, 3)


var miFuncionTxt = miFuncion.toString();
console.log(miFuncionTxt);
*/


/*
//declaración de funcion tipo expresión (sin nombre)
let suma = function name(a, b, c) { return a + b + c };
resultado = suma(9, 9, 9);
console.log(resultado);

//funcion de tipo flecha
const funcionTipoFlecha = (a, b) => a + b;
resultado = funcionTipoFlecha(2, 2);
console.log(resultado);
*/

/*
//parametros y argumentos en js
let sumar = function (a=1, b, c=3) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);
    console.log(arguments[4]);
    return a + b + c + arguments[3];
}

resultado = sumar(2, 2, 2, 3);
console.log(resultado);
*/

/*
// Suma de argumentos

let resultado= sumar(3, 3, 3, 3, 3);
console.log(resultado);

function sumar() {
    let suma = 0;

    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    return suma;
}    */


/*
//tipo primitovo
let x = 10;

function camviarValor(a) {
    a = 20
}

// paso por valor
camviarValor(x);
console.log(x);
*/


//paso por referencia

const persona = {
    nombre: 'Dulce',
    apellido: 'Sosa'
}

function cambiarNombre(p1) {
    p1.nombre = 'Luis',
    p1.apellido = 'Arguelles'
}

cambiarNombre(persona);
console.log(persona);