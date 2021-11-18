const arreglos = [6,7,8,9,10];

// for of

for(let numero of arreglos){
    console.log('numero', numero);
}

//for in
for (let indice in arreglos){
    arreglos[indice];
    console.log('indice', indice);
}

let objetoPrueba = {a: '1' , b:'2', c:'3'};
for(let llave in objetoPrueba){
    console.log('llave', llave)
}