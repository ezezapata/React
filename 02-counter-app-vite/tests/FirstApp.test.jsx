import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas FirstApp Component', () => {

    // No es recomendable hacer la prueba del snapshot cuando estamos en desarrollo porque el html puede estar cambiando todo el tiempo
    /* test('Debe hacer match con el snapshot', () => {
        // render(<FirstApp title='Primera prueba' subTitle='Subtitulo' />);
        // render() expone un objeto que contiene muchas propiedades, una es el container
        const { container } = render( <FirstApp title='Título' subTitle='Subtítulo' /> );
        // console.log( container );
        expect( container ).toMatchSnapshot();
    }); */

    test('Debe mostrar el título en un h1', () => {
        const title = 'Hola, soy Ezequiel';
        const { container, getByText, getByTestId} = render( <FirstApp title={ title } subTitle='Subtítulo' /> );

        //getByText solo se asegura de que exista, en este caso, el texto 'Hola, soy Goku'.
        expect( getByText( title ) ).toBeTruthy();

        const h1 = container.querySelector('h1');
        // expect( h1.innerHTML ).toBe( title );
        expect( h1.innerHTML ).toContain( title );

        expect( getByTestId( 'test-title' ).innerHTML ).toContain( title );
    });

    test( 'Debe mostrar el subtitulo enviado por props', () => {
        const title = 'Hola, soy Ezequiel';
        const subTitle = 'Este es un subtítulo';

        const { getByText } = render( <FirstApp title={ title } subTitle={ subTitle }/> );
        expect( getByText( subTitle ) ).toBeTruthy();


    });

});