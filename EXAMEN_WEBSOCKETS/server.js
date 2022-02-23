const express = require('express')
const app = express()
const port = 3000
const server = app.listen(port)
const cors = require('cors')
const io = require('socket.io')(server)


app.use(cors())
app.get('/', (req,res)=>{
    res.send('hola')
})
let jugadores ={}

io.on('connection' , conectados);
function conectados(socket){
    socket.on('nuevoJugador', data=>{
        console.log('Jugador conectado  \t íd: ' + socket.id )
        jugadores[socket.id]= data;
        //imprime el numero de jugadores que estan conectados al servidor
        console.log('numero de jugadres: ' + Object.keys(jugadores).length)
        console.log('id de jugadores conectados: ' , jugadores)
        io.emit('actualizar_jugadores', jugadores)

    })

    socket.on('disconnect', function()  {
        delete jugadores[socket.id];
        console.log('jugador ' + socket.id +  ' desconectado');
        console.log('numero de jugadres conectados: ' + Object.keys(jugadores).length)
        io.emit('actualizar_jugadores', jugadores);
    });
    socket.on('clientToClient', data =>{
        socket.broadcast.emit('serverToClient', data)
    })
}
