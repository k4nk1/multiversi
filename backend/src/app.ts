import express from 'express';
import { hash } from 'bcrypt';

import config from './config';
import rooms from './room';

interface PublicRoomInfo {
    id: string
    name: string,
    currentPlayers: number,
    maxPlayers: number
}

function createApp(){
    const app = express();
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.get('/api/rooms/', (req, res) => {
        const result: Array<PublicRoomInfo> = Array();
        rooms.forEach(room => {
            if(room.isPublic)
                result.push({
                id: room.id, 
                name: room.name, 
                currentPlayers: room.currentPlayers, 
                maxPlayers: room.maxPlayers
                });
        });
        res.send(result);
    });
    app.post('/api/rooms/', async (req, res) => {
        const id = Math.floor(Math.random() * Math.pow(16, config.roomIdDigit)).toString(16).padStart(config.roomIdDigit, '0');
        const name: string = req.body.name ? req.body.name : config.unnamed;
        const isPublic = req.body.isPublic === 'true';
        const hashedPassword = req.body.password ? await hash(req.body.password, config.saltOrRounds) : '';
        const newRoom = {id: id, name: name, isPublic: isPublic, hashedPassword: hashedPassword, currentPlayers: 0};
        rooms.set(id, newRoom);
    });
    return app;
}

export default createApp;