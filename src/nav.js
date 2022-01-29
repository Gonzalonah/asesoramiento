import React from 'react';
import ReactDOM from 'react-dom';

export default function head(){
    ReactDOM.render(
        <ul>
         <li className="text" id = "home">Home</li>
         <li id="html" className = "text">Dibujo Técnico</li>
         <li id="wi" className = "text">¿Qué es?</li>
         <li id="ent" className="text">Entorno de trabajo</li>
         <li id="estr" className = "text">Lineas</li>
        </ul>, document.getElementById("nav")
    )};