class Persona {

    static contadorPersonas = 0; //atributo propio de la clase

    static get MAX_OBJ() {
        return 4;
    }

    constructor(nombre, apellido)  {
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contadorPersonas < Persona.MAX_OBJ) {
            this.idPersona = ++Persona.contadorPersonas;
        } else {
            console.log('El número de registros permitidos se ha alcanzado');
        }
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

    nombreCompleto() {
        return 'id: ' + this.idPersona + ', ' + this._nombre + ' ' + this._apellido;
    }

    //Sobrescribiendo el metodo de la clase padre Object
    toString(){
        //Polimorfismo
        //el metodo se aplica dependiendo su es la clase hijo o padre
        return this.nombreCompleto();
    }

    static saludar(){
        console.log('Hola desde metodo static ');
    }
    static saludar2(persona){
        console.log(persona._nombre + ' ' + persona._apellido);
    }

    
}


class Empleado extends Persona {
    constructor(nombre, apellido, depto){ 
        super(nombre, apellido);
        this._depto = depto;
    }

    get depto() {
        return this._depto = this.depto; 
    }
    set depto(depto) {
        this._depto = depto;
    }

    //Sobrescritura
    nombreCompleto() {
        return super.nombreCompleto() + ', ' + this._depto;
    }
}

let persona1 = new Persona('Luis', 'Arguelles', '29');

let empleado1 = new Empleado('Efraín', 'Robles', 'ISC');

let empleado2 = new Empleado('Humberto', 'Rojas', 'ISC');

let empleado3 = new Empleado('Marco', 'Grijalva', 'Sistemas')

let empleado4 = new Empleado('Max', 'Savedra', 'Electrónica')

console.log(persona1.toString());
console.log(empleado1.toString());
console.log(empleado2.toString());
console.log(empleado3.toString());
console.log(empleado4.toString());

console.log(Persona.contadorPersonas);
