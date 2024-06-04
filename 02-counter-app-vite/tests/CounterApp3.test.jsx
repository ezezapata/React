import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp3 } from '../src/01-CounterApp/CounterApp3';


describe('Pruebas en CounterApp3', () =>{
    const number = 10;
    test('Debe hacer match con el snapshot.', () => {
        const { container } = render(<CounterApp3 number={ number }/>);
        expect( container ).toMatchSnapshot();
    });

    test('Debe mostrar el valor inicial de 100', () => {
        render( <CounterApp3 number={number}  /> );

        // El screen es la representación del componente renderizado
        expect( screen.getByRole('paragraph').innerHTML ).toContain( '10' );
    });

    test('Debe incrementar con el botón +1', () => {
        render( <CounterApp3 number={number} /> );
        fireEvent.click(screen.getByText( '+1' ));

        expect( screen.getByText('11') ).toBeTruthy();
    });

    test('Debe decrementar con el botón -1', () => {
        render( <CounterApp3 number={number} /> );
        fireEvent.click(screen.getByText( '-1' ));

        expect( screen.getByText('9') ).toBeTruthy();
    });

    test('Debe funcionar el botón reset', () => {
        // Sujeto de prueba
        render( <CounterApp3 number={ number } /> );

        //Estímulo
        fireEvent.click(screen.getByText( '-1' ));
        fireEvent.click(screen.getByText( '-1' ));
        fireEvent.click(screen.getByText( '-1' ));
        // fireEvent.click(screen.getByText( 'Reset' ));
        fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

        // Aserción
        expect( screen.getByText(`${ number }`) ).toBeTruthy();
    });
});