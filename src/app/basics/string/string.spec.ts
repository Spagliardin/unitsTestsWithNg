// describe('Test Strings')
// it('Debe de regresar un string')

import { msje } from './string';

describe('Pruebas de strings', () => {
  it('Debe de regresar un string', () => {
    const resp = msje('Nicolas');

    expect(typeof resp).toBe('string');
  });

  it('Debe de retornar un saludo con el nombre', () => {
    const name = 'Juan';
    const resp = msje(name);

    expect(resp).toContain(name);
  });
});
