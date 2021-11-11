// Cosas que se utilizan
const express = require('express');
const socketIo = require('socket.io');

// Config server
const app = express();
const port = process.env.PORT || "5000";

const server = app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});

app.use(express.static('./public'));

app.get("/", (req, res) => {
    res.sendFile("index.html");
});

// Sockets

const io = socketIo(server);

io.on('connection', (socket) =>{
    console.log('Id de la conexion:', socket.id);

    socket.on('chat:enviar', (data) =>{
        console.log(data);
        socket.broadcast.emit('chat:recibir', data);
    });
});