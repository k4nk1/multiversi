type PlayerOrder = number;
const EMPTY: PlayerOrder = -1;

class Game{
    size: number;
    board: PlayerOrder[][];
    noPlayer: number;
    constructor(size: number, noPlayer: number){
        this.size = size;
        this.board = [...Array(size)].map(_ => Array(size).fill(EMPTY))
        this.noPlayer = noPlayer;
    }

    place(x: number, y: number, playerOrder: PlayerOrder): boolean{
        if(x < 0 || this.size < x || y < 0 || this.size < y) return FAILED;
        if(this.)
    }

    get(x: number, y: number): PlayerOrder{
        if(x < 0 || this.size < x || y < 0 || this.size < y) return null;
        
    } 
}