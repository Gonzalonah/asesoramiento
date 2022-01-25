import React from "react"
import ReactDOM from "react-dom"
 import log from "./logo.jpg"
export default function nav (){
    ReactDOM.render(
    <>
         <aside className="logo">
             <a id="about">
                 <img src={log} id="logo"></img>
             </a>
         </aside>
         <>
            <h3 className="list">Sistemas tecnológicos</h3>
            <ul className="list">
                <li><a className="anclas" href="./st.html">HTML</a></li>
                <li><a className="anclas">Primeras etiquetas</a></li>
                <li><a className="anclas">CSS</a></li>
                <li><a className="anclas">Mi primer sitio</a></li>
            </ul>
            <h3 className="list">Lenguajes tecnológicos</h3>
            <ul className="list">
                <li><a className="anclas">Tipos de lineas</a></li>
                <li><a className="anclas">Tipos de cotas</a></li>
                <li><a className="anclas">Tipos de colores(En proceso)</a></li>
            </ul>
            <h3 className="list">Laboratorio de programación</h3>
            <ul className="list">
                <li><a className="anclas">Tablas de verdad</a></li>
                <li><a className="anclas">Penseamiento lógico</a></li>
                <li><a className="anclas">Pensar como una computadora</a></li>
                <li><a className="anclas">PSeInt</a></li>
            </ul>
            <h3 className="list">Laboratorio de hardware</h3>
            <ul className="list">
                <li>En proceso</li>
            </ul>
            <h3 className="list" id="lso">Laboratorio de sistemas operativos</h3>
            <ul className="list">
                <li>En proceso</li>
            </ul>
            <h3 className="list">Laboratorio de aplicaciones</h3>
            <ul className="list">
                <li>En proceso</li>
            </ul>
            <h3 className="list">Robótica</h3>
            <ul className="list">
                <li><a className="anclas">Pensar como una computadora</a></li>
                <li><a className="anclas"></a></li>
            </ul>
            <h3 className="list">Matemática</h3>
            <ul className="list">
                <li>En proceso</li>
            </ul>
            <h3 className="list">Química</h3>
            <ul className="list">
                <li>En proceso</li>
            </ul>
            <h3 className="list">Física</h3>
            <ul className="list">
                <li>En proceso</li>
            </ul>
            

         </>
         </>,
        document.getElementById("app")
    )    
}