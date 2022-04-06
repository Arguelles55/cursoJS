
miFuncion1();
miFuncion2();

function miFuncion1() {
    console.log('mi función 1');
}

function miFuncion2() {
    console.log('mi función 2');
}

//funciones callback
function imp(msg) {
    console.log(msg);
}

function sumar(n1, n2, fnCb) {
    let res = n1 + n2;
    fnCb(`Resultado: ${res}`);
}

sumar(3, 5, imp);

//llamadas asincronas con setTimeout

function miFnCb() {
    console.log('mi funcion callback después de 5 seg.');
}
setTimeout(miFnCb, 5000);

setTimeout(function () { console.log('fn2 4 seg.')}, 4000 );

setTimeout(() => console.log('callback 3 seg.'), 3000);