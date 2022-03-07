class Persona {

    email = 'valor por default'; //atributo para los objetos de clase persona que se creen 

    static contadorPersonas = 0; //atributo propio de la clase

    constructor(nombre, apellido)  {
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
        console.log('Se incrementa el contador: ' + Persona.contadorObjetosPersona);
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
        return this._nombre + ' ' + this._apellido;
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

let persona1 = new Persona('Luis', 'Arguelles');
console.log(persona1);

let persona2 = new Persona('Dulcelena', 'Sosa');
console.log(persona2.nombreCompleto());

let empleado1 = new Empleado('Efrain', 'Robles', 'Sistemas');

empleado1.depto = 'IGE';

console.log(empleado1);


console.log(empleado1.nombreCompleto());

console.log(empleado1.toString());

// persona1.saludar(); no se puede lllamar una fn static desde un objeto, solo desde la clase

Persona.saludar();
Persona.saludar2(persona1);
Persona.saludar2(empleado1);
Empleado.saludar2(persona2);

console.log(empleado1.contadorObjetosPersona); //no se puede,la clase está esperando este nuevo atributo 'No static'
console.log(Empleado.contadorObjetosPersona);