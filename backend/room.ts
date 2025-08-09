import { roomIdRange } from './config';

class Room {
    name: string
    isPublic: boolean;
    password: string;
    id: string;

    constructor(name: string, isPublic: boolean, password: string) {
        this.name = name;
        this.isPublic = isPublic;
        this.password = password;
        this.id = String(Math.floor(Math.random() * roomIdRange));
    }

    get needPassword(): boolean {
        return this.password === '';
    }
}

