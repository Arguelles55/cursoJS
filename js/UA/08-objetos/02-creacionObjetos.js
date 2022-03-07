/*
//metodo 2 para crear nuevo objeto
let persona2 = new Object;
persona2.nombre = 'Sharo Dulcelena';
persona2.apellidoPat = 'Sosa';
persona2.apellidoMat = 'Cruz';
persona2.celular = '8333280701';

console.log(persona2.celular);
*/


let persona = {
    nombre: 'Luis Enrique',
    apellidoPat: 'Arguelles',
    apellidoMat: 'Hernandez',
    edad: 29,
    tel: '8461012642',
    nombreCompleto: function() {
        return this.nombre + ' ' + this.apellidoPat + ' ' + this.apellidoMat;
    }
}
console.log(persona.nombre);
console.log(persona['edad']);

//for in
for (nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona [nombrePropiedad]);
}

persona.tel = '8333280701';
persona.tel = '8468992439';

delete persona.tel;

console.log(persona.tel);

/*distinas formas de imprimir*/
// for in
// console.log(persona.nombre + ' ' + persona.apellidoPat);
let personaArray = Object.values(persona);
console.log(personaArray);

let personaStringnify = JSON.stringify(persona);
console.log(personaStringnify);
