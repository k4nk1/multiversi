type Color = string;
type PlayerOrder = number;

interface Player{
    id: string,
    name: string,
    color: Color,
    order: PlayerOrder
}

export {
    type Color,
    type PlayerOrder,
    type Player
}