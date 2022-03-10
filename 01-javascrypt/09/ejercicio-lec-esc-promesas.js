const fs = require('fs');

function promesaLeerArchivo(path){
    const Promesa = new Promise(
        (resolve, reject) => {
            fs.readFile(
                path, 'utf-8',
                (error,contenido) => {
                    if (error) {
                        console.error('error leyendo contenido');
                    } else {
                        console.log(contenido)
                    }
                }
            );
        }
    )
    retunr Promesa
}

promesaLeerArchivo('./06-ejemplo.txt')
    .then((datosPromesa)=>{
        console.log(datosPromesa)
    })
    .catch((error)=>{
            console.log(error)
        }
    )


function promesaEscribirArchivo(path, contenidoActual , nuevoContenido ){

}
function ejercicio(path, nuevo contenido) {

}

ejercicio('./06-ejemplo.txt', 'Buenas mananas');