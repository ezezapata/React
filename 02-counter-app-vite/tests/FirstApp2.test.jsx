import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas FirstApp2 Component', () => {
    const title = 'Titulo';
    const subTitle = 'SubTítulo';
    
    test('Debe hacer match con el snapshot', () => {
        const { container } = render( <FirstApp title={ title } subTitle={ subTitle } /> );
        expect( container ).toMatchSnapshot();
    });

    test( 'Debe mostrar el mensaje "SubTítulo"', () => {
        render( <FirstApp title= { title } /> );
        expect( screen.getByText( title ) ).toBeTruthy();
    });

    test( 'Debe mostrar el título en un h1', () => {
        render( <FirstApp title={ title } /> );
        expect( screen.getByRole( 'heading', {level: 1} ).innerHTML ).toContain( title );
    });

    test( 'Debe mostrar el subtítulo enviado por las props', () => {
        render( <FirstApp title={ title } subTitle={ subTitle } /> );
        expect( screen.getAllByText( subTitle ).length ).toBe( 1 );
    });

});