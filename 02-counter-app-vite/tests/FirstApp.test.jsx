import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas FirstApp Component', () => {
    test('Debe hacer match con el snapshot', () => {
        render(<FirstApp/>);
    });
});