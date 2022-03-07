let persona2 = new Persona(); //no se puede crear antes que la  clase, no aplica el hoisting

class Persona {
    constructor(nombre, apellido, edad)  {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
 
    get nombre() {
        return this._nombre; 
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

}


let persona1 = new Persona('Luis', 'Arguelles', '29');

persona1.nombre= 'Dulce'; //set nombre
console.log(persona1);
console.log(persona1.nombre); //get nombre