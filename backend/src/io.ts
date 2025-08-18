import socketio from 'socket.io';
import http from 'node:http';

function createIO(server: http.Server){
    const io = new socketio.Server(server);

    io.on('connection', socket => {
        const roomid = socket.handshake.query.roomid;
        if(!roomid){
            socket.emit("error", "No room ID");
            return;
        }
        
        socket.join(roomid);

        socket.on('chat', msg => {
            io.to(roomid).emit("chat", msg.msg);
        });

        socket.on('setting', msg => {
            
        });

        socket.on('game', msg => {

        });
    });
}

export default createIO;