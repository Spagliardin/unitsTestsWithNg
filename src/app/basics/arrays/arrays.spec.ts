import { obtenerRobost } from "./arrays"


describe( 'Prueba de Arrays', ()=> {


    it( 'Debe de retornar al menos tres robotos', ()=> {
        const resp = obtenerRobost()
        expect( resp.length ).toBeGreaterThanOrEqual( 3 )
    })
    it( 'Debe de existir Megaman y Ultron', ()=> {
        const resp = obtenerRobost()
        expect( resp ).toContain( 'Megaman' )
        expect( resp ).toContain( 'Ultron' )
    })


})