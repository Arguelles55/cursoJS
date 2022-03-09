class Persona {
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }

    get idPersona() {
        return this._idPersona;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }

     get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }


    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }
    
    datos() {
        return `id:${this._idPersona} 
                   ${this._nombre} 
                   ${this._apellido}, 
                   ${this._edad}`;
    }
    toString(){
        return this.datos();
    }
}


 





// EMPLEADO
class Empleado extends Persona {
    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }      

    get idEmpleado() {
        return this._idEmpleado;
    }

    get sueldo() {
        return this._sueldo;
    }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }

    // datos() {
    //     return super.toString() + ' ' + this.idPersona + ' - idEmpleado:' + this._idEmpleado + ' ' +  ' ' + this._sueldo
    // }
    toString(){
      // return super.toString() +  '  -  idEmpleado: ' + this._idEmpleado + ', ' +  'sueldo: ' + this._sueldo
        return `${super.toString()}  
        -  idEmpleado: ${this._idEmpleado}
        , sueldo: ${this._sueldo}`
    }
}





//  CLIENTE
class Cliente extends Persona {
    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro) {
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes ;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente() {
        return this._idCliente;
    }

    get fechaRegistro() {
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro) {
        this._fechaRegistro = fechaRegistro;
    }
    
    // datos() {
    //     return 'id:' + this._idCliente + ' ' + super.toString() + ' ' + this._sueldo
    // }

    toString(){
        return  super.toString() + ' '  + this._idCliente + ',  fecha de registro: ' + this._fechaRegistro
    }
}

// persona
let persona1 = new Persona('Luis', 'Arguelles', 29);
console.log(persona1.toString());

let persona2 = new Persona('Dulce', 'Sosa', 26);
console.log(persona2.toString());


// empleado
let empleado1 = new Empleado('Mia', 'Arguelles', '4', 3500000);
console.log(empleado1.toString());

// cliente
let cliente1 = new Cliente('Sara', 'Hernandez',55, 2022);
console.log(cliente1.toString());

let empleado2 = new Empleado('Jorge', 'Arguelles', 20, 50000);
console.log(empleado2.toString());