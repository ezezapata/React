import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdAsyc debe retornar un héroe', ( done ) => {
        const id = 1;
        getHeroeByIdAsync( id )
            .then( heroe => {
                expect( heroe ).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                
                done();
            });


    });
});

describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdAsyc debe retornar un error si el héroe no existe', ( done ) => {
        const id = 100;
        getHeroeByIdAsync( id )
            .catch( error => {
                console.log( error );
                done();
            });


    });
});