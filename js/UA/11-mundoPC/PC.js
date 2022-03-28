class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() {
        return this.tipoEntrada;
    }
    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this.marca;
    }
    set marca(marca) {
        this._marca = marca;
    }

}

class Raton extends DispositivoEntrada {

    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }


    get idRaton() {
        return this.idRaton;
    }

    toString() {
        return `Raton [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`
    }
}




class Teclado extends DispositivoEntrada {

    static contadorTeclado = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }

    get idTeclado() {
        return this._idTeclado;
    }

    toString() {
        return `Teclado [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`
    }
}




class Monitor {

    static contadorMonitores = 0;

    constructor(marca, tamaño) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor() {
        return this._idMonitor;
    }

    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }

    get tamaño() {
        return this._tamaño;
    }
    set tamaño(tamaño) {
        this._tamaño = tamaño;
    }


    toString() {
        return `Monitor [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}]`
    }

}


class Computadora {

    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get idComputadora() {
        return this._idComputadora;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }

    get monitor() {
        return this._monitor;
    }
    set monitor(monitor) {
        this._monitor = monitor;
    }

    get teclado() {
        return this._teclado;
    }
    set teclado(teclado) {
        this._teclado = teclado;
    }

    get raton() {
        return this._raton;
    }
    set raton(raton) {
        this._raton = raton;
    }

    toString() {
        return `Computadora: ${this._idComputadora}, ${this._nombre}, \n ${this._monitor}, \n teclado: ${this._teclado}, \n ${this._raton}`
    }

}


class Orden {

    static contadorOrdenes = 0;
    static get MAX_ORDEN() {  //return 3
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }

    mostrarOrden() {
        let computadorasOrden = '';

        for (let computadora of this._computadoras) {
            computadorasOrden += `\n${computadora}`;
        }

        console.log(`Orden: ${this._idOrden}, computadoras: ${computadorasOrden}`);
    }

}



let teclado1 = new Teclado('usb-c', 'Intel');
let teclado2 = new Teclado('bluetooth', 'AMD');

console.log(teclado1.toString());
console.log(teclado2.toString());

let raton1 = new Raton('usb', 'HP');
let raton2 = new Raton('bluetooth', 'DELL');
raton2.marca = 'VAIO';

console.log(raton1.toString());
console.log(raton2.toString());

let monitor1 = new Monitor('ACER', 27);
console.log(monitor1.toString());

let monitor2 = new Monitor('LENOVO', 32);
console.log(monitor2.toString());


let computadora1 = new Computadora('Alienware', monitor2, teclado1, raton2);
console.log(`${computadora1}`);  //en vez de toString, usamos el backslash y funciona igual

let computadora2 = new Computadora('Armada', monitor1, teclado2, raton1);
console.log(`${computadora2}`);


let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();


let orden2 = new Orden();
orden2.agregarComputadora(computadora1);
orden2.mostrarOrden();