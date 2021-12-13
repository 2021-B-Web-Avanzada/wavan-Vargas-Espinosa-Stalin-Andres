const inquirer = require('inquirer');
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
                        ])
                    }
                
        }catch (error){
            console.log('Existio un problema');
        }
        
    }
}
main()