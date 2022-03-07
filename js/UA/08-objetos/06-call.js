let persona1 = {
    nombre: 'Luis',
    apellido: 'Arguelles',
    edad: 29,
    nombreCompleto : function(titulo, tel) {
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}

let persona2 = {
    nombre: 'Dulce',
    apellido: 'Sosa',
    edad: '29'
}


console.log(persona1.nombreCompleto() );

console.log(persona1.nombreCompleto.call(persona2, 'lic.', '8333280701') );

//Apply
arreglo = ['Ing.', '0701']
console.log(persona1.nombreCompleto.apply(persona2, arreglo));

console.log(persona1.nombreCompleto.apply(persona2, ['Ing.', '833 328']));
