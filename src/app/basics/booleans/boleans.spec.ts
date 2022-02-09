import { UserLog } from "./booleans"


describe('Prueba de Booleanos', ()=> {

    it('Debe retornar true', ()=>{

        const resp = UserLog()
        expect( resp ).toBeTruthy()

    })


})