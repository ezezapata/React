// Importaciones que sirven para renderizar la app.
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import './styles.css'; // Esta es la forma de agregar estilos de manera global

// Functional components
// Los componentes basados en funciones se escriben con PascalCase
// Normalmente los componentes no estan en este archivo.
// Se encuentra en el archivo HelloWorldApp.jsx
// function App() {
//     return (<h1>Hola Mundo</h1>);
// };

ReactDOM.createRoot( document.getElementById('root') )
    .render(
        <React.StrictMode>
            <HelloWorldApp />
            <FirstApp />
        </React.StrictMode>
    )