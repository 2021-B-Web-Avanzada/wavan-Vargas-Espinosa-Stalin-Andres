//funciones

function soloNumeros(a,b,c) {
    return a-b+c //valor a devolver
}
//JS permite el uso de funciones sin validacione

function soloLetras(a,b,c) {
    console.log(a,b,c)
}


//funciones nombradas
function funcionNombrada() {

}
const funcionSinNombre = function() {

}

//funciones anonimass =  Fat Arrow Functions

const funcionFatArrow1 = () => {}

//FAT ARROW FUNCTIONS
const funcionFatArrow5 = (x) => x+1;
const funcionFatArrow6 = (x) => {
    return x+1
};

//Parametros infinitos que llegan en un arreglo
// solo se puede tener una de estas por funcion

function sumarNumeros(...otrosNumeros) {
    let total = 0;
    otrosNumeros.forEach(
        (valorActual) =>{
            total = total + valorActual;
        }
    );
    return total;
}

sumarNumeros(1,2,3,4,5,6,7,8,9,10,11,12,13);