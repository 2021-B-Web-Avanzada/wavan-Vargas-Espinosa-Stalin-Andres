cine = require ('./Informacion_Cine.js')
const inquirer = require('inquirer');
pelicula = require('./Informacion_Pelicula.js')

let funciones = require('./Function_Cine')

async function main(){
    console.log('========================Bienvenido a la cadena de Cines "Pepito Film" ==========================================')

    let bandera = true
    while (bandera){
        try {
            const opcionSeleccionada = await  inquirer.prompt({
                
                    type: 'rawlist' ,
                    name: 'opcion',
                    message: 'Escoge la opcion que necesites',
                    choices:['1. Registrar Cine',
                        '2. Actualizar Cine',
                        '3. Eliminar Cine Registrado',
                    '4. Listar Cines Registrados',
                     '5. Registrar pelicula' , 
                    '6. Actualizar Pelicula',
                    '7. Eliminar Pelicula',
                        '8. Listar Peliculas Registradas',
                        '9. Salir']
                }
            )
            console.log('La opcion seleccionada es:  ' + opcionSeleccionada.opcion)
            let opcion = opcionSeleccionada.opcion
            opcion = parseInt(opcion)
            
            switch (opcion) {
                case 1:
                        console.log('==================Ingrese la información del cine a registrar ============================')
                        const informacionCine = await inquirer.prompt([
                            {
                                type: 'input',
                                name: 'Cod_Cine',
                                message:'Identificador Unico del Cine'
                            },
                            {
                                type: 'input',
                                name: 'nombreCine',
                                message:'Ingresa el nombre del Cine'
                            },
                            {
                                type: 'input',
                                name: 'Direccion',
                                message:'Ingresa la ubicacion del Cine'
                            },
                            {
                                type: 'input',
                                name: 'nombreAdministrador',
                                message:'Ingresa el nombre del adminstrador del Cine'
                            },
                            {
                                type: 'number',
                                name: 'telefono',
                                message:'Ingresa el telefono de referencia del administrador'
                            },
                            {
                                type: 'input',
                                name: 'HoraAtencion',
                                message:'Ingresa la hora de atencion del Cine'
                            }
                        ]);
                   let  info_cine = new cine(informacionCine.Cod_Cine, informacionCine.nombreCine, informacionCine.Direccion, informacionCine.nombreAdministrador,
                        informacionCine.telefono, informacionCine.HoraAtencion);
                        //CRUD_cine.escribirArchivo(info_cine)
                    try{
                        funciones.escribirArchivo(info_cine)
                       // funciones.escribir(info_cine)
                            .then(( )=> console.log('Regitro Existoso'))
                           .catch((err)=> console.error(err))


                    }catch (e) {
                        console.log(e)
                    }
                    break;
                case 2:
                    try{
                        let cines = await funciones.leerArchivo()
                        let d = JSON.stringify(cines);
                        console.log('Identificador' + '\t' + 'Nombre del Cine' +'\t' + 'Direccion' + '\t' +'Administrador' + '\t' + 'Telefono contacto' +'\t' + 'Horario de Atencion'  )
                        for(let clave in cines ){
                            console.log(cines[clave]["identificador"] + '\t' + cines[clave][ "nombreCine" ] + cines[clave][ "direccion" ] + '\t' + cines[clave][ "nombreAdministrador" ] +  cines[clave][ "telefonoAdministrador" ] + '\t' + cines[clave][ "horaApertura" ] )
                        }
                        let informacionCine = await inquirer.prompt([
                            {
                            type:'input',
                            name : 'id_cine',
                            message: 'Ingrese el identificador del Cine que desea actualizar'
                        }, {
                                type: 'input',
                                name: 'nombreCine',
                                message:'Ingresa el nombre del Cine'
                            },
                            {
                                type: 'input',
                                name: 'Direccion',
                                message:'Ingresa la ubicacion del Cine'
                            },
                            {
                                type: 'input',
                                name: 'nombreAdministrador',
                                message:'Ingresa el nombre del adminstrador del Cine'
                            },
                            {
                                type: 'number',
                                name: 'telefono',
                                message:'Ingresa el telefono de referencia del administrador'
                            },
                            {
                                type: 'input',
                                name: 'HoraAtencion',
                                message:'Ingresa la hora de atencion del Cine'
                            }
                        ]);
                        let  cine_actualizado = new cine(informacionCine.id_cine, informacionCine.nombreCine, informacionCine.Direccion, informacionCine.nombreAdministrador,
                            informacionCine.telefono, informacionCine.HoraAtencion);
                        funciones.actualizarRegistro(cine_actualizado)
                        break;

                    }catch(err){
                        console.error(err)
                    }
                case 3:
                    try{
                        let cines = await funciones.leerArchivo()
                        let d = JSON.stringify(cines);
                        console.log('Identificador' + '\t' + 'Nombre del Cine' +'\t' + 'Direccion' + '\t' +'Administrador' + '\t' + 'Telefono contacto' +'\t' + 'Horario de Atencion'  )
                        for(let clave in cines ){
                            console.log(cines[clave]["identificador"] + '\t' + cines[clave][ "nombreCine" ] + cines[clave][ "direccion" ] + '\t' + cines[clave][ "nombreAdministrador" ] +  cines[clave][ "telefonoAdministrador" ] + '\t' + cines[clave][ "horaApertura" ] )
                        }
                        let id = await inquirer.prompt({
                            type:'input',
                            name : 'id_cine',
                            message: 'Ingrese el identificador del Cine que desea eliminar'
                        });
                        funciones.eliminarRegistro(id.id_cine)
                    }catch (err){
                        console.error(err)
                    }
                case 4:
                    try{
                         let cines = await funciones.leerArchivo()
                        let d = JSON.stringify(cines);
                         console.log('Identificador' + '\t' + 'Nombre del Cine' +'\t' + 'Direccion' + '\t' +'Administrador' + '\t'  + 'Horario de Atencion'  )
                         for(let clave in cines ){
                             console.log(cines[clave]["identificador"] + '\t' + cines[clave][ "nombreCine" ] + cines[clave][ "direccion" ] + '\t' + cines[clave][ "nombreAdministrador" ] + '\t' + cines[clave][ "horaApertura" ] )
                         }


                    }catch (err){
                    console.error(err)}
                    break;
                case 5:
                    console.log( '=================== Bienvenido al Registro de Peliculas' )
                    const informacion_pelicula = await inquirer.prompt([
                        {
                            type: 'input',
                            name:'id_museo',
                            message: 'Ingrese el ID del cine a asociar'
                        },
                        {
                            type: 'input',
                            name:'id_pelicula',
                            message: 'Ingrese el ID e la pelicula: '
                        },
                        {
                            type: 'input',
                            name:'nombre_Peicula',
                            message: 'Ingrese el nombre de la pelicula:'
                        },
                        {
                            type: 'input',
                            name:'categoria',
                            message: 'Ingrese la categoria a la que pertenece'
                        },
                        {
                            type: 'confirm',
                            name:'en_Cartelera',
                            message: 'Se encuentra en cartelera la pelicula'
                        },
                        {
                            type: 'input',
                            name:'edad_restriccion',
                            message: 'Para que edad no esta restringida? '
                        },
                        {
                            type: 'input',
                            name:'fecha_Estreno',
                            message: 'Indique la fecha de estreno'
                        },
                    ]);
                    let info_pelicula = new pelicula( informacion_pelicula.id_pelicula ,informacion_pelicula.nombre_Peicula ,
                        informacion_pelicula.categoria, informacion_pelicula.en_Cartelera, informacion_pelicula.edad_restriccion, informacion_pelicula.fecha_Estreno)
                        try{
                            funciones.registrarPelicula(info_pelicula ,informacion_pelicula.id_museo )
                        }catch (e){
                            console.error(e)
                        }
                    break;
                case 6:
                    try{
                        let peliculas = await funciones.leerArchivoPeliculas()
                        let d = JSON.stringify(peliculas);
                        console.log('Identificador' + '\t' + 'Nombre de la pelicula' +'\t' + 'categoria' + '\t' +'Esta_en_Cartelera' + '\t' + 'restriccion' +'\t' + 'fecha_Estrenon'  )
                        for(let clave in peliculas ){
                            console.log(peliculas[clave]["identificador"] + '\t' + peliculas[clave][ "nombrePelicula" ] + peliculas[clave][ "Categoria" ] + '\t' + peliculas[clave][ "Esta_en_Cartelera" ] +
                                peliculas[clave][ "restriccion" ] + '\t' + peliculas[clave][ "fecha_Estreno" ] )
                        }
                        let informacion_Pelicula_actualizada = await inquirer.prompt([
                            {
                                type: 'input',
                                name:'id_cine',
                                message: 'Ingrese el ID del cine a asociar'
                            },
                            {
                                type: 'input',
                                name:'id_pelicula',
                                message: 'Ingrese el ID de la pelicula que desee actualizar: '
                            },
                            {
                                type: 'input',
                                name:'nombre_Peicula',
                                message: 'Ingrese el nombre de la pelicula:'
                            },
                            {
                                type: 'input',
                                name:'categoria',
                                message: 'Ingrese la categoria a la que pertenece'
                            },
                            {
                                type: 'confirm',
                                name:'en_Cartelera',
                                message: 'Se encuentra en cartelera la pelicula'
                            },
                            {
                                type: 'input',
                                name:'edad_restriccion',
                                message: 'Para que edad no esta restringida? '
                            },
                            {
                                type: 'input',
                                name:'fecha_Estreno',
                                message: 'Indique la fecha de estreno'
                            }
                        ]);
                        let info_pelicula_actualizada = new pelicula( informacion_Pelicula_actualizada.id_pelicula ,informacion_Pelicula_actualizada.nombre_Peicula ,
                            informacion_Pelicula_actualizada.categoria, informacion_Pelicula_actualizada.en_Cartelera, informacion_Pelicula_actualizada.edad_restriccion, informacion_Pelicula_actualizada.fecha_Estreno)
                        try{
                            funciones.actualizarRegistroPelicula(info_pelicula_actualizada, informacion_Pelicula_actualizada.id_cine )
                            break;
                        }catch (e){
                            console.error(e)
                        }



                    }catch(err){
                        console.error(err)
                    }
                case 7:



                    try{
                        let cines = await funciones.leerArchivo()
                        let peliculas = await funciones.leerArchivoPeliculas()
                        let d = JSON.stringify(cines);
                        console.log('Identificador' + '\t' + 'Nombre de la pelicula' +'\t' + 'categoria' + '\t' +'Esta_en_Cartelera' + '\t' + 'restriccion' +'\t' + 'fecha_Estrenon'  )
                        for(let clave in peliculas ){
                            console.log(peliculas[clave]["identificador"] + '\t' + peliculas[clave][ "nombrePelicula" ] + peliculas[clave][ "Categoria" ] + '\t' + peliculas[clave][ "Esta_en_Cartelera" ] +
                                peliculas[clave][ "restriccion" ] + '\t' + peliculas[clave][ "fecha_Estreno" ] )
                        }
                        let id = await inquirer.prompt([
                            {
                                type: 'input',
                                name:'id_cine',
                                message: 'Ingrese el ID del cine a asociar'
                            },
                            {
                            type:'input',
                            name : 'id_pelicula',
                            message: 'Ingrese el identificador de la pelicula que desea eliminar'
                        }]);
                        funciones.eliminarRegistroPelicula(id.id_cine, id.id_pelicula)
                    }catch (err){
                        console.error(err)
                    }
                    case 8:
                        try{
                            let peliculas = await funciones.leerArchivoPeliculas()

                            console.log('Identificador' + '\t' + 'Nombre de la pelicula' +'\t' + 'categoria' + '\t' +'Esta_en_Cartelera' + '\t' + 'restriccion' +'\t' + 'fecha_Estrenon'  )
                            for(let clave in peliculas ){
                                console.log(peliculas[clave]["identificador"] + '\t' + peliculas[clave][ "nombrePelicula" ] + peliculas[clave][ "Categoria" ] + '\t' + peliculas[clave][ "Esta_en_Cartelera" ] +
                                    peliculas[clave][ "restriccion" ] + '\t' + peliculas[clave][ "fecha_Estreno" ] )
                            }


                        }catch (err){
                            console.error(err)}
                        break;
                case 9:
                    bandera = false;
                    break;

            }




        }catch (error){
            console.log(error);
        }
        
    }
}
main();