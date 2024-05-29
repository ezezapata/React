import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe de retornar un héroe por ID', () => {
        const id = 1;
        const heroe = getHeroeById( id );
        expect( heroe ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('getHeroeById debe de retornar un héroe por ID', () => {
        const id = 100;
        const heroe = getHeroeById( id );

        expect( heroe ).toBeFalsy();
    });

    test('getHeroesByOwner debe retornar un arreglo con los héroes de DC', () => {
        const owner = 'DC';
        const heroesByOwner = getHeroesByOwner( owner );

        expect( heroesByOwner.length ).toBe( 3 );
    });

    test('getHeroesByOwner debe retornar un arreglo con los héroes de DC filtrados', () => {
        const owner = 'DC';
        const heroesByOwner = getHeroesByOwner( owner );
        expect( heroesByOwner ).toEqual( [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]
       );
    });

    test('getHeroesByOwner debe retornar un arreglo con los heroes de marvel', () => {
        const owner = 'Marvel';
        const heroesByOwner = getHeroesByOwner( owner );
        console.log(heroesByOwner);

        expect( heroesByOwner.length ).toBe( 2 );
        expect( heroesByOwner ).toEqual( [
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ] )
    });
});