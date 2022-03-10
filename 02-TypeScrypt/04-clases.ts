class Persona{
    public nombre: string;
    public apellido: string ;
    static nombreReferencial: string = 'Humano';
    protected nombreyApellido = '';

    constructor(nombreParametro: string,
                apellidoParametro: string,) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreyApellido = nombreParametro + ' ' + apellidoParametro;
    }
    private mostrarNombreyApellido():string{
        return this.nombreyApellido;
    }
}

class Uuario extends Persona{
    constructor(nombreParametro: string,
                apellidoParametro: string,
                public cedula: string,
                public estadoCivil: string) {
        super(nombreParametro, apellidoParametro);
    }
}
const andres = new Uuario(
    'Andres',
    'Vargas',
    '1718959321',
    'soltero'
);
andres.nombre;
andres.cedula;
andres.apellido;
andres.estadoCivil;