const socket = io('http://localhost:3000')

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let clientBalls = {}

putWallsAround(0,0, canvas.clientWidth, canvas.clientHeight);
let x_incial = 40 + Math.random()*560;
let y_inicial = 40 + Math.random()*400;
let bola = new Ball(x_incial,y_inicial,40,5);
bola.player = true;
bola.maxSpeed = 5

/*socket.on('serverToClient', (data) =>{
    alert(data)
})
*/
socket.emit('nuevoJugador', {x: x_incial, y: y_inicial} )
socket.on('actualizar_jugadores', jugadores =>{
    ctx.clearRect(0,0, canvas.clientWidth, canvas.clientHeight);
    jugadoresConectados = {}
    for (let id_jugador in jugadores){
        if(clientBalls[id_jugador]===undefined && id_jugador!== socket.id){
          clientBalls[id_jugador] = new Ball (jugadores[id_jugador].x , jugadores[id_jugador].y,40,5 );
        }
        jugadoresConectados[id_jugador] = true;
    }
//borrar un jugador cuando se sale del servidor
    for(let id_jugador in clientBalls){
        if(!jugadoresConectados[id_jugador]){
            clientBalls[id_jugador].remove();
            delete clientBalls[id_jugador];
        }
    }
})


function logicaJuego(){
    socket.emit('actualizar',{
        x:bola.pos.x , y: bola.pos.y
    })
}

userInput(bola);
requestAnimationFrame(mainLoop);