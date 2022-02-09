import { Jugador2 } from './jugador2';



describe( 'Pruebas de Jugador 2 Emit', () => {

    let jugador: Jugador2

    beforeEach( ()=> jugador = new Jugador2())

    it( 'Debe de emitir un evento cuando recibe daño', ()=> {

        let newHp: number = 0

        jugador.hpchange.subscribe( (hp: number ) => {
            newHp = hp
        })

        jugador.recibeDanio(1000)

        expect( newHp ).toBe(0)
    })

    it( 'Debe de emitir un evento cuando recibe daño y sobrevivir si es menos de 100', ()=> {

        let newHp: number = 0

        jugador.hpchange.subscribe( (hp: number ) => {
            newHp = hp
        })

        jugador.recibeDanio(50)

        expect( newHp ).toBe(50)
    })

})