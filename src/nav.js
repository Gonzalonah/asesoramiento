import React from 'react';
import ReactDOM from 'react-dom';

export default function head(){
    ReactDOM.render(
        <ul>
         <li className="text" id = "home">Home</li>
         <li id="html" className = "text">PSeInt</li>
         <li id="wi" className = "text">C#</li>
         <li id="ent" className="text">C++</li>
         <li id="estr" className = "text">PHP</li>
         <li id="htm" className = "text">Sistemas ABM</li>
       

        </ul>, document.getElementById("nav")
    )};

      /*<li id="head" className = "text">Tablas de verdad</li>
         <li id="body" className = "text">Diagrama de Venn</li>
         <li id="eti" className="text">Etiquetas de texto</li>
         <li id="lyt" className = "text">Listas y tablas</li>*/