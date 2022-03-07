function Persona (nombre, apellido, edad) {

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;    
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}


let padre = new Persona('Luis', 'Arguelles', 29 );
console.log(padre);
padre.edad = 11;
console.log(padre);
console.log(padre.nombreCompleto());

Persona.prototype.tel = '8461012642';

let madre = new Persona('Dulce', 'Sosa', '22');
madre.edad = 26;
console.log(madre);
madre.tel = '8333280701';
console.log(madre.tel);

console.log(padre.tel);


/** 2da op. para crear una instancia de persona 
let miObjeto1 = new Object();
let miObjeto2 = {};
*/