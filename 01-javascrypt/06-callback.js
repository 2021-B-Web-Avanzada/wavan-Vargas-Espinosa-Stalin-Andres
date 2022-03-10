//06 callsbacks
const fs = require('fs');
console.log('Primero');
fs.readFile(
    './03-Operadores.js', 'utf-8',
    (error,contenido) =>{
        if(error){
            console.error('error leyendo contenido');
        }
        else {
            fs.readFile(
                './06-ejemplo.txt','utf-8',
                (errorVariable,contenidoVariable) =>{
                    if(errorVariable){
                        console.error('error leyendo contenido');
                    }
                    else {
                        console.log(contenido, contenidoVariable)

                }
            );
        }

    }
);
console.log('TERCERO');

