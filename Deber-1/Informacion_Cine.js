 class Informacion_Cine {

    constructor(identificador, nombreCIne, direccion, nombreAdministrador, telefonoAdministrador, horaApertura, peliculas=[]) {
        this.identificador = identificador
        this.nombreCine=nombreCIne
        this.direccion = direccion
        this.nombreAdministrador = nombreAdministrador
        this.telefonoAdministrador = telefonoAdministrador
        this.horaApertura = horaApertura
        this.pelicula = peliculas
    }

}

 module.exports = Informacion_Cine;








