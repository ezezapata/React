import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => {
    test('getImagen debe retornar la url de la imágen', async() => {
        const url = await getImagen();
        console.log( url );
        expect(typeof url).toBe( 'string' );
    });
});