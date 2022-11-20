/**
let miPromesa = new Promise((resolved, rejected )=>{
    let status = false;
    if (status)
    resolved('Resuelto!! ;) ')
    else
    rejected('Rechazado! :v')
});
 */

//miPromesa.then(valor=>console.log(valor),error=>console.log(error));
/*miPromesa.then(valor=>console.log(valor)).catch(error=>console.log(error));



let promesa = new Promise(valor=>{
    setTimeout(() => valor('setTimeOut con promesa!'), 6000);
    console.log('inicia promesa');
});


promesa.then(msg=>console.log(msg));


async function Promesa(){
    let miPromesa = new Promise(resolver=>{
        resolver('Promesa con await');
    });
    console.log(await miPromesa);
}

Promesa();

*/




async function Promesa() {
    let miPromesa = new Promise(resolver=>{
        setTimeout(() => resolver('promise async await timeOut!  :v'), 9000);
    });

    console.log(await miPromesa);
}

Promesa();

