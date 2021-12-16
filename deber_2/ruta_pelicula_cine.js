const express = require('express')
const rutas_pelicula_cine =express.Router()


//leer peliculas por cine
rutas_pelicula_cine.get('/', (req,res)=>{
    req.getConnection((err,conn)=>{
        if((err)) {
            return res.send(err)
        }
        else{
            conn.query('SELECT nombre_cine , nombrePelicula , Esta_en_Cartelera FROM informacion_cine e JOIN pelicula p ON e.id = p.id', (err, rows)=>{
                if((err)) {
                    return res.send(err)
                }  else{
                    res.json(rows)
                }
            })
        }
    })
})

module.exports = rutas_pelicula_cine
