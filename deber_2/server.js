const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const rutas = require('./rutas')

const app = express()

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



// servidor corriendo
app.listen(app.get('port'), () => {
    console.log('servidor esta corriendo')
    }
)



