// destructuracion de objetos
const adrian ={
    nombre:'Adrian'
};
const carolina ={
    nombre: 'Carolina', apellido:'Egez'
};

const adrianCarolina={
    ...carolina,
    ...adrian,
};
console.log('adrianCarolina', adrianCarolina)