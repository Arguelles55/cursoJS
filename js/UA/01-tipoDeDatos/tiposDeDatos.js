var producto = "Laptop";
console.log(producto);

producto = 100;

console.log(typeof producto );


/** Numero */
var precio = 11000;
console.log(precio);

/** tipo Objeto */
var objeto = {
    nombre : "Luis",
    apellido : "Arguelles",
    edad : "29",
}

console.log(typeof objeto);

/** 
 *____________________________
 *  funcion
 * simbolo
 * clase 
 * null
   (abajo) ________________*/

function miFuncion() { }
    console.log(typeof miFuncion);

    var simbolo = Symbol ("Mi simbolo");
    console.log(typeof simbolo);

class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);


var x;
console.log(typeof x);

x = undefined;
console.log(typeof x);


var y = null;
console.log(y);
console.log(typeof y);


/** arreglos */

var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos );

var z = '';
console.log(z);
console.log(typeof z);



