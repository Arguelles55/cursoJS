let a=3, b=2, c= "3";

/** igual */
let z = a==c;            //revisa el valor sin importar el tipo de dato
console.log(z);

z = a===c;               //revisa el valor y el tipo
console.log(z);


/** diferente */
z = a!=c;
let x = a!=b;
console.log(z);
console.log(x);

z = a!==c;
x = a!==b;
console.log(z);
console.log(x);

/** > = <   let a=3, b=2, c= "3"; */
z = a < b;
console.log(z);

z = a >= b;
console.log(z);

z = a <= b;
console.log(z);

z = a <= c;
console.log(z);

/** modulo % */
let i = 11;

if ( i % 2 == 0){
    console.log("número par");
} else {
    console.log("número impar");
}

let edad = 11, adulto = 18;

if (edad >= adulto){
    console.log("es mayor de edad");
} else {
    console.log("es menor de edad");
}

/** AND operador lógico */
let j = 5;
let valMin = 0, valMax = 10;

if (j >= valMin && j <= valMax){
    console.log("Dentro del rango");
} else {
    console.log("Fuera del rango");
}

/** OR operador lógico */
let vacaciones = false, diaDescanso = true;

if (vacaciones || diaDescanso){
    console.log("El padre puede asistir");
} else {
    console.log("El padre está ocupado");
}

/** ternario */
let f = false;
let resultado = (3>22)?"verdadedo":f;
console.log(resultado);

let numero = 9;
let resultado2 = numero%2 == 0?"número par":"número impar";
console.log(resultado2);

/** String a number */
let miNumero = "17";
let edad2 = Number(miNumero);
//console.log(typeof miNumero);

if (edad2 >= 18) {
    console.log("Puede votar");
} else {
    console.log("No puede votar");
}

let resultado3 = edad2>=18?"Puede votar ;)":"Muy Joven, no puede votar";
console.log(resultado3);

/** is Not a Number (isNaN) */
let miNumero4 = "17x"
let edad4 = Number(miNumero4);
console.log(edad4);

if (isNaN(edad4)) {
    console.log("No es un número");
} else {
    if (edad4 >= 18) {
        console.log("Puede votar");
    } else {
        console.log("No puede votar");
    }
}

/** precedencia de operadores */  // CTRL + SPACE 
let r = 5;
let s = 10;
let t = ++r + s-- ;

console.log(r);
console.log(s);
console.log(t);