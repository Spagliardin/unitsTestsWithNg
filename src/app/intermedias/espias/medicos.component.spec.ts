import { empty, from, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

describe('MedicosComponent', () => {
  let componente: MedicosComponent;
  const servicio = new MedicosService(null);

  beforeEach(() => {
    componente = new MedicosComponent(servicio);
  });

  it('Init: Debe de Cargar los medicos', () => {
    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return from([['Medico 1', 'Medico 2', 'Medico 3']]);
    });

    componente.ngOnInit();

    expect(componente.medicos.length).toBeGreaterThan(0);
  });

  it('Debe de llamar al servidor para agregar un medico', () => {
    const spy = spyOn(servicio, 'agregarMedico').and.callFake(() => {
      return empty();
    });

    componente.agregarMedico();

    expect(spy).toHaveBeenCalled();
  });

  it('Debe de agregar un medico al arreglo de medicos', () => {
    const medico = { id: 1, name: 'Juan' };

    spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));

    componente.agregarMedico();

    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });

  it('Si falla la edicion, la propiedad mensajeError, debe de ser igual al error', () => {
    const miError = 'Error';

    spyOn(servicio, 'agregarMedico').and.returnValue(throwError(miError));
    componente.agregarMedico();

    expect(componente.mensajeError).toBe(miError);
  });

  it('Debe de llamar al servidor para borrar un medico', () => {
    spyOn(window, 'confirm').and.returnValue(true);

    const spy = spyOn(servicio, 'borrarMedico').and.returnValue(empty());

    componente.borrarMedico('1');

    expect(spy).toHaveBeenCalledOnceWith('1');
  });

  it('No debe de llamar al servidor para borrar un medico', () => {
    spyOn(window, 'confirm').and.returnValue(false);

    const spy = spyOn(servicio, 'borrarMedico').and.returnValue(empty());

    componente.borrarMedico('1');

    expect(spy).not.toHaveBeenCalledOnceWith('1');
  });
});
