const express = require('express')
const rutas =express.Router()
//todos los get
rutas.get('/obtenerPlatos', (req,res)=>{
    req.getConnection((err, conn)=>{
        if((err)) {
            return res.send(err)
        }
        else{
            conn.query('SELECT * FROM plato', (err, rows)=>{
                if((err)) {
                    return res.send(err)
                }  else{
                    res.json(rows)
                }
            })
        }
    })
})

//obtener clientes
rutas.get('/obtenerClientes', (req,res)=>{
    req.getConnection((err, conn)=>{
        if((err)) {
            return res.send(err)
        }
        else{
            conn.query('SELECT * FROM cliente', (err, rows)=>{
                if((err)) {
                    return res.send(err)
                }  else{
                    res.json(rows)
                }
            })
        }
    })
})

//obtener comprobantes
rutas.get('/obtenerCOmprobantes', (req,res)=>{
    req.getConnection((err, conn)=>{
        if((err)) {
            return res.send(err)
        }
        else{
            conn.query('SELECT * FROM comprobante_pago', (err, rows)=>{
                if((err)) {
                    return res.send(err)
                }  else{
                    res.json(rows)
                }
            })
        }
    })
})

//crear comprobante
rutas.post('/crearComprobante', (req,res)=>{
    req.getConnection((err, conn)=>{
        if((err)) {
            return res.send(err)
        }
        else{

            conn.query('INSERT INTO comprobante_pago set ?' ,[req.body], (err, rows)=>{
                if((err)) {
                    return res.send(err)
                }  else{
                    res.send('El comprobante  ha sido registrado ')
                }
            })
        }
    })
})

//obtener cine x Id
rutas.get('/platoXid/:id_plato', (req,res)=>{
    req.getConnection((err, conn)=>{
        if((err)) {
            return res.send(err)
        }
        else{
            conn.query('SELECT * FROM plato where id_plato = ?'  ,[req.params.id_plato], (err, rows)=>{
                if((err)) {
                    return res.send(err)
                }  else{
                    res.json(rows)
                }
            })
        }
    })
})

// obtener cliente por cedula
//obtener cine x Id
rutas.get('/clienteXCedula/:cedula', (req,res)=>{
    req.getConnection((err, conn)=>{
        if((err)) {
            return res.send(err)
        }
        else{
            conn.query('SELECT * FROM cliente where cedula = ?'  ,[req.params.cedula], (err, rows)=>{
                if((err)) {
                    return res.send(err)
                }  else{
                    res.json(rows)
                }
            })
        }
    })
})

//crear cine
rutas.post('/crearPlato', (req,res)=>{
    req.getConnection((err, conn)=>{
        if((err)) {
            return res.send(err)
        }
        else{

            conn.query('INSERT INTO plato set ?' ,[req.body], (err, rows)=>{
                if((err)) {
                    return res.send(err)
                }  else{
                    res.send('El plato ha sido registrado ')
                }
            })
        }
    })
})
//crear un cliente
rutas.post('/crearCliente', (req,res)=>{
    req.getConnection((err, conn)=>{
        if((err)) {
            return res.send(err)
        }
        else{

            conn.query('INSERT INTO cliente set ?' ,[req.body], (err, rows)=>{
                if((err)) {
                    return res.send(err)
                }  else{
                    res.send('El cliente ha sido registrado ')
                }
            })
        }
    })
})


//borrar cine
rutas.delete('/eliminarPlato/:id_plato', (req,res)=>{
    req.getConnection((err, conn)=>{
        if((err)) {
            return res.send(err)
        }
        else{

            conn.query('DELETE FROM plato WHERE id_plato = ? ' ,[req.params.id_plato], (err, rows)=>{
                if((err)) {
                    return res.send(err)
                }  else{
                    res.send('El plato ha sido eliminado ')
                }
            })
        }
    })
})

//actualizar cine
rutas.put('/actualizarPlato/:id_plato', (req,res)=>{
    req.getConnection((err, conn)=>{
        if((err)) {
            return res.send(err)
        }
        else{
            conn.query('UPDATE plato SET ? WHERE id_plato = ? ' ,[req.body, req.params.id_plato], (err, rows)=>{
                if((err)) {
                    return res.send(err)
                }  else{
                    res.send('El plato ha sido actualizado ')
                }
            })
        }
    })
})

/*
// crear pelicula
//crear cine
rutas.post('/', (req,res)=>{
    req.getConnection((err, conn)=>{
        if((err)) {
            return res.send(err)
        }
        else{

            conn.query('INSERT INTO pelicula set ?' ,[req.body], (err, rows)=>{
                if((err)) {
                    return res.send(err)
                }  else{
                    res.send('Ela pelicula se ha registrado con exito ')
                }
            })
        }
    })
})
*/
module.exports = rutas