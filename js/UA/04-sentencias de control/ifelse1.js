
let condition = true;

if (condition) {
    console.log("verdadero");
} else {
    console.log("Falso");
}


let numero = 2;

if (numero == 1) {
    console.log("Número uno");
} else if (numero == 2) {
    console.log("Número dos");
} else if (numero == 3) {
    console.log("Número tres");
} else if (numero == 4) {
    console.log("Número cuatro");
} else {
    console.log("Unknown number");
}

*/

/** is Not a Number (isNaN) 
let miNumero4 = "18x"
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
*/

/*
let mes = 9;
let estacion;

if (mes == 1 || mes == 2 || mes == 12) {
    estacion = "Invierno";
} else if (mes == 3 || mes == 4 || mes == 5) {
    estacion = "Primavera";
} else if (mes == 6 || mes == 7 || mes == 8) {
    estacion = "verano";
} else if (mes == 9 || mes == 10 || mes == 11) {
    estacion = "Otoño";
} else estacion = "Mes desconocido";
console.log(estacion);

*/


/***********************
6am-11am - Buenos dias
12pm-18pm - Buenas Tardes
19pm-24pm - Buenas noches
0am-6am - Durmiendo


let hora = ;
let saludo;


if (hora >= 6 && hora <= 11 ) {
   saludo = "Buenos días";
} else if (hora >= 12 && hora <= 18) {
   saludo = "Buenas tardes";
} else if (hora >= 19 && hora <= 24) {
   saludo = "Buenas noches"
} else if (hora >= 0 && hora <6) {
   saludo = "Durmiendo";
} else {
   saludo = "valor incorrecto"
} 
console.log(saludo);

************************************

let num = 2;
let txt = "Número desconocido"

switch (num) {
    case 1:
        txt = "número uno";
        break;

    case 2:
        txt = "número dos";
       // break;

    case 3:
        txt = "número tres";
        break;

    default:
        txt = "caso no encontrado";
        break;
}
console.log(txt);

*/

let mes = "9";
let estacion;
let strtonum = Number(mes)

switch (strtonum) {
    case 1: case 2: case 12:
        estacion = "Invierno"
        break; 
    case 3: case 4: case 5:
        estacion = "Primavera"
        break; 
    case 6: case 7: case 8:
        estacion = "Verano"
        break; 
    case 9: case 10: case 11:
        estacion = "Otoño"
        break; 
    default:
        estacion = "Caso no encontrado"
        break;
}
console.log(estacion);