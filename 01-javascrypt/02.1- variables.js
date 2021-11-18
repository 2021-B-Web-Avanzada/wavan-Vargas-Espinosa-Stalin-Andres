const Diego = {
    nombre : "DIego",
    apellido : "Marquez",
    edad : 24,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa: {
        color: 'plomo',
        talla: '36'
    },
    mascotas : ['Zeus','Hannah']
}
//acceder a las propiedaes del objeto
Diego.nombre;


console.log(Diego.edad)
console.log(Diego)
console.log(Object.keys(Diego))  // imprime todas las llaves es decir que atributos son
console.log(Object.values(Diego)); // imprime solo el valor del atributo sin su llave

//eliminar llaves dentro de un objeto
delete Diego.nombre;
console.log(Diego);

// Variables por valor o referencia
// variable por valor en JS son las primitivas
//variables primitvas : number, string , boolean
let edadAndres = 25;
let edadStalin = edadAndres;

console.log(edadAndres);
console.log(edadStalin);
edadAndres = edadAndres+1;
console.log(edadAndres);
console.log(edadStalin);

//variabls por referencia
let rafael={
    nombre:  "Rafael"
};
let lenin = rafael;
console.log(rafael);
console.log(lenin);
lenin.nombre =  "Lenin"
console.log(rafael);
console.log(lenin);
//clonar el objeto
delete  rafael.nombre;
console.log(rafael);
console.log(lenin);

//clonar arreglos
let arregloNumeros = [1,2,3,4,5]
let arregloClonado = Object.assign(target: [], arregloNumeros)
console.log(arregloNumeros);
console.log(arregloClonado);
arregloNumeros[0]=200;
arregloClonado[0]=100''

