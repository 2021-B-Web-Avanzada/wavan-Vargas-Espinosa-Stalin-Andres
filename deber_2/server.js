const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const rutas = require('./rutas')
const rutas_pelicula = require('./rutas_pelicula')
const rutas_pelicula_cine = require('./ruta_pelicula_cine')

const app = express()
const cors = require('cors')

app.use(cors())
app.set('port', process.env.PORT || 9000)

const ruta_acceso ={
    host:'localhost',
    port: 3306,
    user: 'root',
    password: 'andres1996',
    database: 'cine'

}
//inicializar la bdd
app.use(myconn(mysql, ruta_acceso, 'single'))
app.use(express.json())


//rutas
app.get('/', (req,res)=>{
    res.send('bienvenido')
})

app.use('/api', rutas
)
app.use('/api_peliculas', rutas_pelicula
)
app.use('/api_peliculas_cine', rutas_pelicula_cine
)

// servidor corriendo
app.listen(app.get('port'), () => {
    console.log('servidor esta corriendo')
    }
)



