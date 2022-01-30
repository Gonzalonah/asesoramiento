import React from 'react';
import ReactDOM from 'react-dom';
import cabe from './Recurso 2.svg';


export default function head(){
ReactDOM.render(
    <div id="stheader">
    <header id = "stheaders">
        <img src = {cabe} className = "header" id="header"></img>
        <section className="materia">Laboratorio de Programación</section>
    </header>
</div>, document.getElementById("header")
)};