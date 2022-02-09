import { EventEmitter } from "@angular/core";


export class Jugador2 {
    
    hp: number;
    hpchange: EventEmitter<number> = new EventEmitter<number>()

    constructor(){
        this.hp = 100;
    }

    recibeDanio( danio: number ){

        if (danio > this.hp ) {
            this.hp = 0
        } else {
            this.hp = this.hp - danio
        }

        this.hpchange.emit( this.hp )  
    }


}