class Producto {

    static contadorProductos = 0;

    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.contadorProductos;
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }
    set precio(precio) {
        this._precio = precio;
    }

    toString() {
        return `id: ${this._idProducto},  nombre: ${this._nombre}, precio: $${this._precio}`
    }
}


class Orden {

    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS() { //return 5;
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarProducto(producto) {
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            this._productos.push(producto);
        } else {
            console.log('No se pueden agregar mas productos a la orden');
        }
    }

    calcularTotal() {

        let totalVenta = 0;

        for (let producto of this._productos) {
            totalVenta += producto.precio;
        }

        return totalVenta;
    }


    mostrarOrden() {
        let productosOrden = '';
        for (let producto of this._productos) {
            productosOrden += '\n{' +  producto + '}';
        }
        console.log( `idOrden: ${this._idOrden}, total: ${this.calcularTotal()}, ${productosOrden} `);
    }

}


let producto1 = new Producto('iphone', 300);
let producto2 = new Producto('ipad 3', 600);
let producto3 = new Producto('laptop', 300);
let producto4 = new Producto('reloj', 300);
let producto5 = new Producto('RAM', 300);
let producto6 = new Producto('LCD', 300);

console.log(producto1.toString());
console.log(producto2.toString());

let orden1 = new Orden(producto1);
orden1.agregarProducto(producto5);
orden1.agregarProducto(producto4);

orden1.mostrarOrden();

let orden2 = new Orden();

orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.mostrarOrden();  