const socket = io.connect('http://localhost:3000')

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

construirEscenario();
let clientBalls = {}
let usuario_Id;
let pelota_hockey;

//putWallsAround(0,0, canvas.clientWidth, canvas.clientHeight);

socket.on('connect', ()=>{
    usuario_Id = socket.id
})


socket.on('actualizar_jugadores', jugadores =>{
    ctx.clearRect(0,0, canvas.clientWidth, canvas.clientHeight);
    jugadoresConectados = {}
    for (let id in jugadores){
        if(clientBalls[id]===undefined){
           clientBalls[id] = new Ball (jugadores[id].x + 35, jugadores[id].y, 40, 5);
            clientBalls[id].maxSpeed = 4;
            clientBalls[id].score = 0;
            clientBalls[id].no = jugadores[id].no;
            if(clientBalls[id].no === 1){
                clientBalls[id].color = "#3366ee";
            } else if(clientBalls[id].no === 2){
                clientBalls[id].color = "#828888";
            }
            if(id === usuario_Id){
                userInput(clientBalls[id]);
            }
        }
        jugadoresConectados[id] = true;
    }
//borrar un jugador cuando se sale del servidor
    for(let id in clientBalls){
        if(!jugadoresConectados[id]){
            clientBalls[id].remove();
            delete clientBalls[id];
        }
    }
})

socket.on('actualizar_posicion_pelota', posicionPelota => {
    if(pelota_hockey === undefined){
        pelota_hockey = new Ball(posicionPelota.x, posicionPelota.y, 20, 10);
        pelota_hockey.color = "red";
    } else {
        pelota_hockey.setPosition(posicionPelota.x, posicionPelota.y);
    }
})

socket.on('actualizar_Posicion', poscicion_jugador =>{
    //console.log("getting ",poscicion_jugador);
    for (let id in poscicion_jugador){
        if(clientBalls[id] !== undefined){
            clientBalls[id].setPosition(poscicion_jugador[id].x, poscicion_jugador[id].y, poscicion_jugador[id].angle);
        }

    }
})

socket.on('actualizar_Marcador', marcador_Usuario => {
    if (marcador_Usuario === null){
        for (let id in clientBalls){
            clientBalls[id].score = 0;
        }
    } else {
        for (let id in clientBalls){
            if (id === marcador_Usuario){
                if(clientBalls[id].no === 1){
                    clientBalls[id].score++;
                } else if(clientBalls[id].no === 2){
                    clientBalls[id].score++;
                }
            }
        }
    }
})


requestAnimationFrame(renderOnly);


//letras que se mestraran en el juego
function interface(){
    ctx.font = "30px Arial";
    for (let id in clientBalls){
        if(clientBalls[id].no === 1){
            ctx.fillText(clientBalls[id].score, 20,30)
            ctx.fillText(clientBalls[id].score, 20, 30);
        } else if(clientBalls[id].no === 2){
            ctx.fillText(clientBalls[id].score, 600, 30);
        }
    }
}

function construirEscenario(){
    new Wall(60, 80, 580, 80);
    new Wall(60, 460, 580, 460);
    new Wall(60, 80, 60, 180);
    new Wall(60, 460, 60, 360);
    new Wall(580, 80, 580, 180);
    new Wall(580, 460, 580, 360);
    new Wall(50, 360, 10, 360);
    new Wall(0, 360, 0, 180);
    new Wall(10, 180, 50, 180);
    new Wall(590, 360, 630, 360);
    new Wall(640, 360, 640, 180);
    new Wall(630, 180, 590, 180);
}


