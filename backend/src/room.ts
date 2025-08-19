import Game from "./game";
import { type Player } from "./player"

interface Room {
    id: string,
    name: string,
    isPublic: boolean,
    hashedPassword: string | undefined,
    currentPlayers: number,
    maxPlayers: number,
    players: Player[],
    game?: Game
}

const rooms: Map<string, Room> = new Map();

export {
    type Room,
    rooms
};