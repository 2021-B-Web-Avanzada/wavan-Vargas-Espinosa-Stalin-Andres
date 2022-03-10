const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];
console.log(arreglo)

//funciones tipo parametro
//FIND
//ENVIAMOS UNA FUNCION TRUTY FALSY

//DEVUELVE EL PRIMERO QUE CUMPLA CON LA FUNCION
/*
const respuestaFinal = arreglo;
.find(
    function (valorActual, indiceActual , ArregloCompleto){
    console.log( "Valor Actual: " , valorActual() )
    console.log( "indice Actual: ", indiceActual() );
    console.log(( "Arreglo Completo: ", arregloCompleto ));
    return valorActual.nombre ===  "Pamela" ;

});
console.log(respuestaFinal , 'HOla')
*/

const respuestaIndex = arreglo
    .findIndex(
        function (valorActual,indiceActual,arregloCompleto){
            return valorActual.nombre === "Cristian";
        }
    );
console.log('respuestaIndex', respuestaIndex) // indice -> 6 // no encuentra -> -1



const respuestaForEach = arreglo
    .forEach(
        function (valorActual,indiceActual,arregloCompleto) {
            console.log('valorActual', valorActual)
        }
    );
console.log('respuestaForEach',respuestaForEach)

const respuestaMap = arreglo
    .map(
        function (valorActual,indiceActual,arregloComplleto) {
            const nuevoElemento={
                id:valorActual.id,
                nombre: valorActual.nombre,
                nota:valorActual.nota+1,
            };
            return nuevoElemento
        }
    );

const respuestaFilter = arreglo
    .filter(
         (valorActual,indiceActual,arregloCompleto) => {
            return valorActual.nota >=14;
        }
    );
console.log(respuestaFilter)


//reduce                                                         de izq a dreecha
//reduce right                                                  de derecha a iquierda


//devuelve un booleano

const respuestaReduce = arreglo
    .reduce(
        function (valorAcumulado,valorActual,indice,arreglo) {
            return (valorAcumulado + valorActual.nota);
        },100
    );
console.log('respuestaReduce',respuestaReduce);