const fs = require('fs/promises');
const path = './Cines.txt'
const path_Pelicula = './peliculas.txt'
informacion_Cine = require('./Informacion_Cine')
informacion_pelicula = require('./Informacion_Pelicula')



/*function escribir(cine) {

    try {
        const listacines = LeerArchivo();
        listacines.push(museo);
        fs.writeFileSync(path , JSON.stringify(listacines));

    } catch (err) {
        if(error.code === 'ENOENT'){
             fs.writeFileSync(path,Json.stringify([cine]))
        }
    }
}
*/
async function leerArchivo() {
    try {
        const contenido = await fs.readFile(path);
        const json = JSON.parse(contenido);
        return json;
    } catch (error) {
        throw error;
    }
}
async function  escribirArchivo (cine){
    try {
        const cines = await leerArchivo();

        const cine_ya_registrado = cines.some(
            (valorActual,indice,arreglo) =>{
                return valorActual.identificador === cine.identificador;
            }
        );
        if(!cine_ya_registrado){
            cines.push(cine);
            await fs.writeFile(path,JSON.stringify(cines,null,2));
        }
        else{
            throw 'Museo ya registrado';
        }

    } catch (error) {
        console.log(error)
    }
};

async function eliminarRegistro(id_cine){
    try{
        let cines = await leerArchivo();
        let indice = cines.findIndex((objeto, indice, cines)=>{

            return objeto.identificador ==id_cine

        });
        cines.splice(indice,1)
        await fs.writeFile(path,JSON.stringify(cines,null,2));
        console.log('Registro eliminado con Exito')
    }catch (err){
        consol.error(err);
    }


}

async function actualizarRegistro(cine){
    try{
        let cines = await leerArchivo();
        let indice = cines.findIndex((objeto, indice, cines)=>{
            return objeto.identificador ==cine.identificador
        });
        console.log(indice)
        if(indice>0)
        {
            const cineActualizado = new  informacion_Cine(cine.identificador, cine.nombreCine, cine.direccion, cine.nombreAdministrador, cine.telefonoAdministrador,
                cine.horaApertura )
            cines.splice(indice,1,cineActualizado);
            await fs.writeFile(path,JSON.stringify(cines,null,2));
            console.log( 'Registro Actualizado con exito')

        }

    }catch(err){
        console.error(err)
    }


}
async function leerArchivoPeliculas() {
    try {
        const contenido = await fs.readFile(path_Pelicula);
        const json = JSON.parse(contenido);
        return json;
    } catch (error) {
        throw error;
    }
}

async function  registrarPelicula (pelicula, id_museo){
    try { //registro en archivo de peliculas
        const peliculas = await leerArchivoPeliculas();
        const cines = await  leerArchivo();

        const pelicula_ya_registrada = peliculas.some(
            (valorActual,indice,arreglo) =>{
                return valorActual.identificador === pelicula.identificador;
            }
        );
        if(!pelicula_ya_registrada){
            peliculas.push(pelicula);
            await fs.writeFile(path_Pelicula,JSON.stringify(peliculas,null,2));
            console.log('Registroo en archivo de peliculas exitoso')
        }
        else{
            throw 'Pelicula ya registrado';
        }


        // registro en archivo  de cines para asociarlos con estos
        let indice = cines.findIndex((objeto, indice, cines)=>{
            return objeto.identificador ==id_museo
        });
        if(indice>0)
        {

            cines[indice][ "pelicula"].push(pelicula)
            await fs.writeFile(path,JSON.stringify(cines,null,2));
            console.log( 'Registro en archivo cines exitoso')

        }

    } catch (error) {
        console.log(error)
    }
};

async function actualizarRegistroPelicula(pelicula, id_cine){
    //actualizar en archivo de peliculas
    try{
        let peliculas = await leerArchivoPeliculas();
        let indice = peliculas.findIndex((objeto, indice, peliculas)=>{
            return objeto.identificador ==pelicula.identificador
        });

        if(indice>0)
        {
            const peliculaActualizada = new  informacion_pelicula(pelicula.identificador, pelicula.nombrePelicula, pelicula.Categoria, pelicula.Esta_en_Cartelera, pelicula.restriccion,
                pelicula.fecha_Estreno )
            peliculas.splice(indice,1,peliculaActualizada);
            await fs.writeFile(path_Pelicula,JSON.stringify(peliculas,null,2));
            console.log( 'Registro Actualizado en Peliculas.txt con exito')



        }
    }catch(e){
        console.error(e)
    }

    try{
        let cines = await leerArchivo();
        let indice = cines.findIndex((objeto, indice, cines)=>{
            return objeto.identificador ==id_cine
        });

        if(indice>0)
        {
            const peliculaActualizada = new  informacion_pelicula(pelicula.identificador, pelicula.nombrePelicula, pelicula.Categoria, pelicula.Esta_en_Cartelera, pelicula.restriccion,
                pelicula.fecha_Estreno )
            cines[indice][ "pelicula"].splice(indice , 1 ,peliculaActualizada)
            await fs.writeFile(path,JSON.stringify(cines,null,2));
            console.log( 'Registro Actualizado con exito')

        }

    }catch(err){
        console.error(err)
    }


}

async function eliminarRegistroPelicula(id_cine){
    try{
        let cines = await leerArchivo();
        let indice = cines.findIndex((objeto, indice, cines)=>{

            return objeto.identificador ==id_cine

        });
        cines.splice(indice,1)
        await fs.writeFile(path,JSON.stringify(cines,null,2));
        console.log('Registro eliminado con Exito')
    }catch (err){
        consol.error(err);
    }


}


exports.leerArchivo = leerArchivo;
exports.escribirArchivo = escribirArchivo;
exports.eliminarRegistro = eliminarRegistro;
exports.actualizarRegistro= actualizarRegistro;
exports.leerArchivoPeliculas = leerArchivoPeliculas
exports.registrarPelicula = registrarPelicula
exports.actualizarRegistroPelicula = actualizarRegistroPelicula
