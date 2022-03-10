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
//elimina al final del arreglo
arreglos.pop(15)
console.log(arreglos)
//inserta al final
arreglos.push(111)
console.log(arreglos)
// a;adir al inicio del arreglo
arreglos.unshift(21)
console.log(arreglos)
// splica (start: , numero de lementos eliminados , numero de elementos a agregar )
arreglos.splice(2, 3,4,14,17)
//antes[]21,6,7,8,9,111
//solucion [21,6,4,14,17,111}]
console.log(arreglos)
const indiceNuevo = arreglos.indexOf(111)
console.log(indiceNuevo)
arreglos.splice(4,0,indiceNuevo)
console.log(arreglos);

