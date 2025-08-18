interface Room {
    id: string,
    name: string,
    isPublic: boolean,
    hashedPassword: string,
    currentPlayers: number,
    maxPlayers: number
}

const rooms: Map<string, Room> = new Map();

export default rooms;