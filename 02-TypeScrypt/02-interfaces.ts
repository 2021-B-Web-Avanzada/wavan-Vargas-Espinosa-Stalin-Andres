interface Usuario{
    nombre: string;
    apellido: string;
    edad?:number
    sueldo?: number
    casado: boolean |0|1;
    estado: 'AC'| 'IN'|'BN';
  //  imprimirusuario: (mensaje:string) =>
}