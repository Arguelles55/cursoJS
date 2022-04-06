funcion1();

function funcion1() {
    console.log('saludos desde mi función1');
}  

const funcionFlecha = () => 'saludos desde mi función flecha';

console.log(funcionFlecha());


const retornaObj = () => ({nombre: 'Luis Arguelles', edad:28});
console.log(retornaObj());


const funcionConParametroClasico = function(msg)  {
    console.log(msg);
}
funcionConParametroClasico('función clasica con parámetro');

//const funcionConParametro = msg => console.log(msg); si solo es 1 parametro se omiten los parentesis 
const funcionConParametro = (msg) => console.log(msg);
funcionConParametro('mensaje del parametro');

//const funcionConParametros = (op1, op2) => (op1 + op2);
const funcionConParametros = (op1, op2) => {
    let resultado = op1 + op2;
    return `Resultado: ${resultado}`
};
console.log(funcionConParametros(3,3));