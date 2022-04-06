'use strict'

let x = -2;

try {
   // z = 5
    if (isNaN(x)) throw 'No es un número';
    else if (x === '') throw 'es una cadena vacia';
    else if (x >= 0) throw   'es un valor positivo';
    else if (x < 0) throw 'Es un valor negativo';
}

catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}