
const promesaLeerArchivo = () =>{
    return new Promise(
        (resolve, reject) => {
            resolve('CONTENIDO LEER UN ARCHIVO')
            //reject ('ERRORR')
        }
    )
}

const promesaEscribirArchivo = () =>{
    return new Promise(
        (resolve, reject) => {
            resolve('CONTENIDO ESCRIBIR UN ARCHIVO')
            //reject ('ERRORR')
        }
    )
}


//Al momento de usar aync, la funcion se convierte en una promesa
//ASYNC AWAIT
// SE PUEDE UTILIZAR EN METODOS DE CLASES
// CUALQUIER FUNCION (METODOS DE CLSES Y FUNCIONES
//const respuesta = await promesaEcribirArchivo
const ejemplo1 = async()=> {}
async function ejercicio(){
    let nuevoContenido = '';
    console.log('1')
    try{
        console.log('2')
        const contenidoArchivoActual = await promesaLeerArchivo();
        console.log(contenidoArchivoActual);
        console.log('3');
        await  promesaEscribirArchivo();
        console.log('4');
        nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido);
        console.log('5')
    }catch (error){
        console.error(error);
    }
    console.log('6')
    return nuevoContenido;
}

ejercicio().then((data) =>{
    console.log('esta es la respuesta de async await', data)
})
.catch()
    .finally()
