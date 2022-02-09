import { Jugador } from './classes';

describe('Pruebas de Clase', () => {
  let jugador = new Jugador();

  // ciclo de vida de los test

  // beforeAll(); // antes que todas
  // beforeEach() // antes que cada una de las pruebas

  // afterAll() // despues de todas
  // afterEach() // despues de cada una de las pruebas

  beforeAll(() => {
    // console.log('BeforeAll')
  });
  beforeEach(() => {
    jugador = new Jugador();
    // console.log('BeforeEach')
  });
  afterAll(() => {
    // console.log('AfterAll')
  });
  afterEach(() => {
    // jugador.hp = 100
    // console.log('AfterEach')
  });

  it('Debe de retornar 80 de hp si recibe 20 de daño', () => {
    const resp = jugador.recibeDanio(20);

    expect(resp).toBe(80);
  });

  it('Debe de retornar 50 de hp si recibe 50 de daño', () => {
    // const jugador = new Jugador()
    const resp = jugador.recibeDanio(50);

    expect(resp).toBe(50);
  });

  it('Debe de retornar 0 de hp si recibe 100 de daño', () => {
    // const jugador = new Jugador()
    const resp = jugador.recibeDanio(101);

    expect(resp).toBe(0);
  });
});
