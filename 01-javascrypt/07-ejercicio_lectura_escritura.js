
const fs = require('fs');

/*hace una funcion que reciba com parametro una variable
 con el path del archivo y el contenido a gregar del archivo */

function escribirArchivo(path, contenidoNuevo){
    fs.readFile(
        path, 'utf-8',
        (error,contenido) => {
            if (error) {
                console.error('error leyendo contenido');
            } else {
                fs.writeFile(
                    path, contenido + '\n' + contenidoNuevo, 'utf-8',
                    (error) => {
                        if (error) {
                            console.error('error escribiendo contenido');
                        } else {
                            console.log(fs.readFileSync('./06-ejemplo.txt', "utf8"));

                        }
                    }
                );
            }
        }
    );
}
escribirArchivo('./06-ejemplo.txt', 'Andres')
