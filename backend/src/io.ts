import socketio from 'socket.io';
import http from 'node:http';

import { type Room, rooms } from './room';
import { hash } from 'bcrypt';
import config from './config';

function createIO(server: http.Server){
    const io = new socketio.Server(server);


    io.use( async (socket, next) => {
        const roomid = socket.handshake.query.roomid;
        if(roomid === undefined || Array.isArray(roomid)){
            next(new Error("No room ID"));
            return;
        }
        const room = rooms.get(roomid);
        if(room === undefined){
            next(new Error("Room with the ID not found"));
            return;
        }
        if(room.hashedPassword !== undefined){
            const password = socket.handshake.query.password;
            if(password === undefined || Array.isArray(password)){
                next(new Error("Authorization required"));
                return;
            }
            const hashedPassword = await hash(password, config.saltOrRounds);
            if(hashedPassword !== room.hashedPassword){
                next(new Error("Wrong password"));
                return;
            }
        }
        socket.data.roomid = roomid;
        socket.data.room = room;
        room.players.push({id: socket.id, name: })
        socket.join(roomid);
        next();
    });

    io.on('connection', socket => {
        const roomid: string = socket.data.roomid;
        const room: Room = socket.data.room;

        socket.on('chat', msg => {
            io.to(roomid).emit("chat", msg.msg);
        });

        socket.on('configure', msg => {
            switch(msg.key){
                case 'name':
                    
            }
        });

        socket.on('game', msg => {

        });
    });
}

export default createIO;