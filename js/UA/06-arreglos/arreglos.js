const motos = ['KTM', 'DUCATI', 'HUSQVARNA'];
 

for (let cont = 0; cont < motos.length; cont++) {
    console.log(cont + ':' + motos[cont]);
}

motos [2] = 'KAWASAKI';

console.log(motos);

motos.push('YAMAHA');

console.log(motos.length);

motos[motos.length] = 'HONDA';
console.log(motos);

motos [6] = 'SUZUKI';
console.log(motos);


console.log(Array.isArray(motos));
console.log(motos instanceof Array);