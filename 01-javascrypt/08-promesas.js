const fs = require('fs');

function promesaEsPar(numero){
    const miPrimerPromesa = new Promise(
        (resolve, reject )=> {
            if (numero % 2 ==0){
                resolve(numero)
            }else{
                reject('No es par , I am sorry' )
            }
        }
    )
    return miPrimerPromesa
}

function promesaElevarAlCuadrado(numero){
    const  miPrimerpromesa = new Promise((resolve, reject) => {
            const numeroElevadoAlCuadrado = Math.pow(numero, 2);
            resolve(numeroElevadoAlCuadrado);
        }

    );
return miPrimerpromesa
}

promesaEsPar(5)
.then((datosPromesa)=>{
    console.log(datosPromesa)
})
.catch((error)=>{
    console.log(error)
}
)