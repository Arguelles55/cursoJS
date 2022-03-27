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

let teclado1 = new Teclado('usb-c', 'Intel');

console.log(teclado1.toString());


let raton1 = new Raton('usb', 'HP');
let raton2 = new Raton('bluetooth', 'DELL');
raton2.marca = 'VAIO';

console.log(raton1.toString());
console.log(raton2.toString());




