const fs = require('fs');

function promesaLeerArchivo(path){
    const Promesa = new Promise(
        (resolve, reject) => {
            fs.readFile(
                path, 'utf-8',
                (error,contenido) => {
                    if (error) {
                        reject('error leyendo contenido');
                    } else {
                        console.log('Lectura correcta')
                        resolve(contenido)
                    }
                }
            );
        }
    )
    return Promesa
}


function promesaEscribirArchivo(path, contenidoActual , nuevoContenido ){
    const PromesaEscritura = new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path, contenidoActual + '\n' + nuevoContenido, 'utf-8',
                (error) => {
                    if (error) {
                        reject('error escribiendo contenido');
                    } else {
                        console.log('Se escribio Correctamente')
                        console.log(fs.readFileSync('./06-ejemplo.txt', "utf8"));
                    }
                }
            );
        }
    )
    return PromesaEscritura
}

function ejercicio(path, nuevoContenido) {
    promesaLeerArchivo(path)
        .then(
            (datosPromesa)=>{
                console.log(datosPromesa);
                return promesaEscribirArchivo(path,datosPromesa,nuevoContenido)
            }
        )
        .then(
            (datosEscritura)=>{
                console.log(datosEscritura)
                return promesaLeerArchivo(datosEscritura)

            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )
}

ejercicio('./06-ejemplo.txt', 'Buenas dias');