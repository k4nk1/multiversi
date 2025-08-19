import { type PlayerOrder } from "./player";

type Cell = PlayerOrder | null;

interface Coord{
    x: number,
    y: number
}

function add(vec1: Coord, vec2: Coord): Coord{
    return {x: vec1.x + vec2.y, y: vec1.y + vec2.y};
}

class Game{
    size: number;
    board: Cell[][];
    noPlayer: number;
    constructor(size: number, noPlayer: number){
        this.size = size;
        this.board = [...Array(size)].map(_ => Array(size).fill(undefined))
        this.noPlayer = noPlayer;
    }
    
    place(x: number, y: number, playerOrder: PlayerOrder): Coord[]{
        return this._place({x, y}, playerOrder);
    }

    get(x: number, y: number): Cell | undefined{
        return this._get({x, y});
    }

    set(x: number, y: number, playerOrder: PlayerOrder): void{
        return this._set({x, y}, playerOrder);
    }

    _place(coord: Coord, playerOrder: PlayerOrder): Coord[]{
        if(this._get(coord) !== null) return [];
        const directions: Coord[] = [{x:-1, y:-1}, {x:-1, y: 0}, {x:-1, y:1}, {x:0, y:1}, {x:1, y:-1}, {x:1, y:0}, {x:1, y:-1}];
        const changedCoords: Coord[] = [];
        directions.forEach(direction => {
            const line: Coord[] = [];
            let pos = coord;
            while(true){
                pos = add(pos, direction);
                const cell = this._get(pos);
                if(cell === null || cell === undefined) break;
                if(cell === playerOrder){
                    line.forEach(_coord => {
                        this._set(_coord, playerOrder);
                    });
                    changedCoords.push(...line);
                    break;
                }
                line.push(pos);
            }
        });
        if(changedCoords.length === 0) return [];
        this._set(coord, playerOrder);
        return changedCoords;
    }

    _get(coord: Coord): Cell | undefined{
        return this.board.at(coord.x)?.at(coord.y);
    }

    _set(coord: Coord, playerOrder: PlayerOrder): void{
        const column = this.board[coord.x];
        if(!column) return;
        column[coord.y] = playerOrder;
    }

    
}

export default Game;