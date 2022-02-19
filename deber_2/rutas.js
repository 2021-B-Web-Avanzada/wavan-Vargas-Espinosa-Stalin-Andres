const express = require('express')
const rutas =express.Router()

//leer cines
rutas.get('/obtenerCines', (req,res)=>{
    req.getConnection((err, conn)=>{
        if((err)) {
            return res.send(err)
        }
        else{
            conn.query('SELECT * FROM informacion_cine', (err, rows)=>{
                if((err)) {
                    return res.send(err)
                }  else{
                    res.json(rows)
                }
            })
        }
    })
})

//obtener cine x Id
rutas.get('/cinexId/:id', (req,res)=>{
    req.getConnection((err, conn)=>{
        if((err)) {
            return res.send(err)
        }
        else{
            conn.query('SELECT * FROM informacion_cine where id = ?'  ,[req.params.id], (err, rows)=>{
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
rutas.post('/crearCine', (req,res)=>{
    req.getConnection((err, conn)=>{
        if((err)) {
            return res.send(err)
        }
        else{

            conn.query('INSERT INTO informacion_cine set ?' ,[req.body], (err, rows)=>{
                if((err)) {
                    return res.send(err)
                }  else{
                    res.send('El cine ha sido registrado ')
                }
            })
        }
    })
})

//borrar cine
rutas.delete('/borrarCine/:id', (req,res)=>{
    req.getConnection((err, conn)=>{
        if((err)) {
            return res.send(err)
        }
        else{

            conn.query('DELETE FROM informacion_cine WHERE id = ? ' ,[req.params.id], (err, rows)=>{
                if((err)) {
                    return res.send(err)
                }  else{
                    res.send('El cine ha sido eliminado ')
                }
            })
        }
    })
})

//actualizar cine
rutas.put('/actualizarCine/:id', (req,res)=>{
    req.getConnection((err, conn)=>{
        if((err)) {
            return res.send(err)
        }
        else{
            conn.query('UPDATE informacion_cine SET ? WHERE id = ? ' ,[req.body, req.params.id], (err, rows)=>{
                if((err)) {
                    return res.send(err)
                }  else{
                    res.send('El cine ha sido actualizado ')
                }
            })
        }
    })
})


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

module.exports = rutas