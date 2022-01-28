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
            <h3 className="list" id="sistemas">Sistemas tecnológicos</h3>

            <h3 className="list" id="lenguajes">Lenguajes tecnológicos</h3>
           
            <h3 className="list" id="programacion">Laboratorio de programación</h3>

            <h3 className="list" id="Robotica">Robótica</h3>

            <h3 className="list">Laboratorio de hardware</h3>
         
            <h3 className="list" id="lso">Laboratorio de sistemas operativos</h3>
         
            <h3 className="list">Laboratorio de aplicaciones</h3>
           
            <h3 className="list">Matemática</h3>
          
            <h3 className="list">Química</h3>
            
            <h3 className="list">Física</h3>
            
            

         </>
         </>,
        document.getElementById("app")
    )    
}




