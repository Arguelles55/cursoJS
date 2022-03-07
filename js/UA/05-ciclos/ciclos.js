/**  while  */
let contador = 0;

while (contador < 3) {
    console.log(contador);
    contador++;
} console.log("sale del ciclo y ejecuta esta linea");


/** do while */
let cont = 0;

do {
    console.log(cont);
    cont++
} while (cont < 3);
console.log("Fin de ciclo ");




/** for */
for (let contador = 0; contador <7; contador++){
    console.log(contador);
} console.log("Fin del ciclo for");




/** Imprimir pares con while  

let cont = 0;
while (cont <= 10) {
    console.log(cont);
    if (cont %2 ==0) {
        console.log(cont);
    }
    cont++
}

//do while
let c = 0;
do {
    if (c % 2 == 0)
    console.log(c);
    c++
} while ( c <= 10);
*/


/** Imprimir pares con for   
for (let num = 3; num <= 10; num++) {
    if (num % 2 == 0) {
        console.log(num);
        break;
    }


} console.log("Fin del ciclo for");
*/


/** continue */

for (let cont = 0; cont <= 10; cont++) {
    if (cont % 2 !== 0) {
        continue; //ir a la siguiente iteracion
    }
    console.log(cont);
}


//label
inicio:
for (let con = 0; con <= 10; con++) {
    if (con % 2 !== 0) {
        break inicio; //ir al label inicio y romper ciclo
    }
    console.log(con);
}
