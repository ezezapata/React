// Importaciones que sirven para renderizar la app.
// import { HelloWorldApp } from './HelloWorldApp';
// import { FirstApp } from './FirstApp';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css'; // Esta es la forma de agregar estilos de manera global
import {CounterApp} from './01-CounterApp/CounterApp';
import {CounterApp2} from './01-CounterApp/CounterApp2';
import {CounterApp3} from './01-CounterApp/CounterApp3';
import { FirstApp } from './FirstApp';

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
            {/* <FirstApp/> */}
            {/* <CounterApp value={0}/>
            <CounterApp2 value={3}/>
            <CounterApp3 number={0}/> */}
            <FirstApp />
        </React.StrictMode>
    ) 