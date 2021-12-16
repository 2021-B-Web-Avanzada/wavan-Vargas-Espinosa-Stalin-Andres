const express = require('express')
const rutas_pelicula =express.Router()
//leer peliculas
rutas_pelicula.get('/', (req,res)=>{
    req.getConnection((err,conn)=>{
        if((err)) {
            return res.send(err)
        }
        else{
            conn.query('SELECT * FROM pelicula', (err, rows)=>{
                if((err)) {
                    return res.send(err)
                }  else{
                    res.json(rows)
                }
            })
        }
    })
})
// crear peliculas

rutas_pelicula.post('/', (req,res)=>{
    req.getConnection((err, conn)=>{
        if((err)) {
            return res.send(err)
        }
        else{

            conn.query('INSERT INTO pelicula set ?' ,[req.body], (err, rows)=>{
                if((err)) {
                    return res.send(err)
                }  else{
                    res.send('la pelicula se ha registrado con exito')
                }
            })
        }
    })
})

// actualiar pelicula asociada a un cine

rutas_pelicula.put('/:id_pelicula', (req,res)=>{
    req.getConnection((err, conn)=>{
        if((err)) {
            return res.send(err)
        }
        else{
            try{
                conn.query('UPDATE pelicula SET ? WHERE id_pelicula = ? ' ,[req.body, req.params.id_pelicula], (err, rows)=>{
                    if((err)) {
                        return res.send(err)
                    }  else{
                        res.send('la pelicula ha sido actualizado ')
                    }
                })
            }catch(err){
                console.error(err)
            }

        }
    })
})

//eliminar pelicula
//borrar cine
rutas_pelicula.delete('/:id_pelicula', (req,res)=>{
    req.getConnection((err, conn)=>{
        if((err)) {
            return res.send(err)
        }
        else{

            conn.query('DELETE FROM pelicula WHERE id = ? ' ,[req.params.id_pelicula], (err, rows)=>{
                if((err)) {
                    return res.send(err)
                }  else{
                    res.send('La pelicula ha sido eliminado ')
                }
            })
        }
    })
})

module.exports = rutas_pelicula