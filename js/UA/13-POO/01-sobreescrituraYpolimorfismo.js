class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles() {
        return `Empleado: [nombre: ${this.nombre}, sueldo: ${this.sueldo}]`;
    }
}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this.departamento = departamento;
    }

    obtenerDetalles() {
        return `Gerente: [${super.obtenerDetalles()}, depto. ${this.departamento}]`;
    }

}


// polimorfismo ↓↓
function determinarTipo(tipo) {
    console.log(tipo.obtenerDetalles());
    if (tipo instanceof Gerente) {
        console.log('es un objeto tipo Gerente');
        console.log(gerente1.departamento);
    } else if (tipo instanceof Empleado) {
        console.log('es un objeto tipo Empleado');
        console.log(tipo.departamento); //undefined
    } else if (tipo instanceof Object) {
        console.log('es un objeto tipo Object');
    }
}

let empleado1 = new Empleado('Luis', 22000); 
let gerente1 = new Gerente('Argüelles', 30000, 'Sistemas'); 
  
determinarTipo(empleado1);
determinarTipo(gerente1);