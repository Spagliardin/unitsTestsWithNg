import { FormBuilder } from '@angular/forms';
import { FormularioRegister } from './formularios';


    describe('Formularios', ()=> {

        let component: FormularioRegister;

        beforeEach(()=> {
            component = new FormularioRegister( new FormBuilder() )

        })

        it('Debe de crear un formulario con dos campos (Email y Password)', ()=> {
            expect( component.form.contains('email') ).toBeTruthy()
            expect( component.form.contains('password') ).toBeTruthy()
        })
        it('El email debe de ser obligatorio', ()=> {
            
            const control = component.form.get('email')
            control?.setValue('')

            expect( control?.valid ).toBeFalse()

        })
        it('El email debe de ser un email válido', ()=> {
            
            const control = component.form.get('email')
            control?.setValue('Nicolas@gmail.com')

            expect( control?.valid ).toBeTruthy()

        })


    })
