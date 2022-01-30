import React from 'react';
import ReactDOM from 'react-dom';
import autocad from './autocad.jpg';
import lineas from'./lineas.png'

export default function main(){
ReactDOM.render(
    <>
    <div id="homes">
    <h2 className="text">Bienvenid@s</h2>
    <p className="text">
        El presente espacio recopila teoría y explicación de los temas dictados por los docentes en esta respectiva materia.
        <br></br>Va a encontrar en este espacio:
            <li className="text"> Teoria de los temas;</li>
            <li className="text"> Ejercicios practicos;</li>
            <li className="text"> Videos con alguna explicación. </li>
    </p>
   </div>
   <div id="htmls">
    <h2 className="text">PSeInt</h2>
    <h3 className="text">Introducción</h3>
    <p className="text">
    Para poder introducirnos en programación nosotros debemos tener estos dos conocimientos previos.
    <br></br><span id="head">-Teoria sobre las tablas de verdad;</span>
    <br></br><span id="body">-Teoria sobre los diagramas de Venn.</span>
    </p>
   </div>
    <div id="wis">
    <h4 className="text">¿Qué es?</h4>
    <p className = "text">
    El dibujo técnico engloba trabajos como bosquejo y/o croquis, esquemas, diagramas, planos eléctricos y electrónicos, representaciones de todo tipo de elementos mecánicos, planos de arquitectura, urbanismo, etc, resueltos mediante el auxilio de conceptos geométricos, donde son aplicadas las matemáticas, la geometría euclidiana, diversos tipos de perspectivas, escalas, entre otros.
    </p>
   </div>
   <div id="ents">
    <h3 className="text">Entorno de trabajo</h3>
    <p className="text">
       En esta área vamos a trabajar de dos maneras distintas. <br></br> 
       ✔ En una mesa con las herramientas correspondientes a la materia.
           <li id="papel">Papel;</li>
           <span className = "text" id = "pape">
            A0 -	841	x	1189 mm<br></br>
            A1 -	594	x	841 mm<br></br>
            A2 -	420	x	594 mm<br></br>
            A3 -	297	x	420 mm<br></br>
            A4 -	210	x	297 mm<br></br>
            A5 -	148	x	210 mm<br></br>
            A6 -	105	x	148 mm<br></br>
            A7 -	74	x	105 mm<br></br>
            A8 -	52	x	74 mm<br></br>
            A9 -	37	x	52 mm<br></br>
            A10 -	26	x	37 mm<br></br>
            </span>
           <li id = "lapiz">Lapices;</li>
           <span className = "text" id = "lape">
            Lápiz H<br></br>
            Lápiz 2H<br></br>
            Lápiz HB<br></br>
            Lápiz 2B<br></br>
            </span>
           <li>Reglas;</li>
           <li>Goma;</li>
           <li>Etc.</li>
        ✔ En uno de los muchos espacios virtuales que se llama AutoCAD, proporcionado por la empresa AutoDesk.
        <img src={autocad} id="htm"></img>
    </p>
   </div>
   <div id="estrs">
    <h4 className="text">Lineas en el entorno virtual</h4>
    <p className="text">
      Para poder trabajar de manera correcta en esta AutoCAD, y tambien para que cualquier persona que vea nuestros trabajo los entienda, vamos a definir los tipos de lineas según las normas ISO. Son una serie de normas que se establecieron a fin de tener una comprensión a nivel mundial. 
    </p>
    <img src={lineas} alt="estructura html html5" id="htl"></img>
    <p className="text">
        Vamos a tener que setear las siguientes lineas: <b>(En todos nuestros archivos)</b>
    <br></br> 
    <table className="w3-table-all" id="tlineas">
        <tr className="w3-light-grey" id="tline"><td>Nombre</td><td>Tipo de linea</td><td>Grosor</td><td>Color*</td></tr>
        <tr><td>Contornos</td><td>Continua</td><td>default</td><td>Dejamos el que esta en sistema ya que este tiene una configuración que nos permite ver las lineas en negro cuando lo imprimimos</td></tr>
        <tr><td>Aristas visibles</td><td>Continua</td><td>default</td><td>Dejamos el que esta en sistema ya que este tiene una configuración que nos permite ver las lineas en negro cuando lo imprimimos</td></tr>
        <tr><td>Cotas</td><td>Continua</td><td>0.2</td><td>Por lo general se usan colores azules</td></tr>
        <tr><td>Auxiliares</td><td>Continua</td><td>0.2</td><td>Por lo general se usan colores violetas claros</td></tr>
        <tr><td>Contornos ocultos</td><td>Trazos</td><td>0.05</td><td>Por lo general se usan colores grises claros</td></tr>
        <tr><td>Eje de simetría</td><td>Trazos largos y cortos</td><td>0.2</td><td>Por lo general se usan colores verdes</td></tr>        
    </table>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Cabe resaltar que los colores son opcionales y uno puede elegir los de su preferencia.
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </p>
   </div>
   
   <div id="htms">
    <h4 className="text">Tablas de verdad</h4>
    <p className = "text"> 
    Las tablas de verdad son, por una parte, uno de los métodos más sencillos y conocidos de la lógica formal, pero al mismo tiempo también uno de los más poderosos y claros. Entender
bien las tablas de verdad es, en gran medida, entender bien a la lógica formal misma. Esta forma de visualizar los problemas, hace que se nos haga más fácil entender el pensamiento lógico de las computadoras.
        <br></br>
    -Componentes de las tablas <br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Variables: Estos son aquellos datos que pueden variar, tal como dice el nombre. Pueden ser personas, datos o cualquier cosa que uno pueda imaginar.<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Valores posibles: Estas son las opciones posibles por las que pueden pasar las variables. Estos son dos: Verdades y Falsos. Esto corre bajo una regla 2<sup>n</sup>, dónde la n corresponde al número de variables proposicionales y 2 los valores posibles.<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lógica combinatoria: Esta es la lógica por la cual corren los resultados de las variables y sus posibles valores, estos son 2, "Y" y "O".<br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;<b><u>Disyunción (^ - Y)</u></b>
        <br></br>
        Este proceso de lógica te da la condición de que mientras todos los posibles valores sean verdaderos, la resultante va a ser verdadera. 
    <table className="w3-table-all">
    <thead className='tline'><tr><td>P</td><td>Q</td><td>^</td></tr></thead>
    <tbody className='tline'><tr><td>V</td><td>V</td><td>V</td></tr></tbody>
    <tbody className='tline'><tr><td>V</td><td>F</td><td>F</td></tr></tbody>
    <tbody className='tline'><tr><td>F</td><td>V</td><td>F</td></tr></tbody>
    <tbody className='tline'><tr><td>F</td><td>F</td><td>F</td></tr></tbody>
    </table>
    &nbsp;&nbsp;&nbsp;&nbsp;<b><u>Conjunción (v - O)</u></b>
        <br></br>
        Este proceso de lógica te da la condición de que mientras alguno de los posibles valores sean verdaderos, la resultante va a ser verdadera.
    <table className="w3-table-all">
    <thead className='tline'><tr><td>P</td><td>Q</td><td>v</td></tr></thead>
    <tbody className='tline'><tr><td>V</td><td>V</td><td>V</td></tr></tbody>
    <tbody className='tline'><tr><td>V</td><td>F</td><td>V</td></tr></tbody>
    <tbody className='tline'><tr><td>F</td><td>V</td><td>V</td></tr></tbody>
    <tbody className='tline'><tr><td>F</td><td>F</td><td>F</td></tr></tbody>
    </table>
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;<b><u>Condicional (=&gt; - Si ... entonces ... )</u></b>
        <br></br>
        Este proceso de lógica te da la condición de que mientras la primer variable sea VERDADERA y la segunda FALSA entonces el resultado es FALSO, mientras que todos los demás son VERDADEROS. 
    <table className="w3-table-all">
    <thead className='tline'><tr><td>P</td><td>Q</td><td>=&gt;</td></tr></thead>
    <tbody className='tline'><tr><td>V</td><td>V</td><td>V</td></tr></tbody>
    <tbody className='tline'><tr><td>V</td><td>F</td><td>F</td></tr></tbody>
    <tbody className='tline'><tr><td>F</td><td>V</td><td>V</td></tr></tbody>
    <tbody className='tline'><tr><td>F</td><td>F</td><td>V</td></tr></tbody>
    </table>
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;<b><u>Bicondicional (&lt;=&gt; - ... Si y solo si ...)</u></b>
        <br></br>
        Este proceso de lógica te da la condición de que mientras las dos variable sea <u>iguales</u> entonces el resultado es VERDADERO, mientras que todos los demás son FALSOS. 
    <table className="w3-table-all">
    <thead className='tline'><tr><td>P</td><td>Q</td><td>&lt;=&gt;</td></tr></thead>
    <tbody className='tline'><tr><td>V</td><td>V</td><td>V</td></tr></tbody>
    <tbody className='tline'><tr><td>V</td><td>F</td><td>F</td></tr></tbody>
    <tbody className='tline'><tr><td>F</td><td>V</td><td>F</td></tr></tbody>
    <tbody className='tline'><tr><td>F</td><td>F</td><td>V</td></tr></tbody>
    </table>
        <br></br>
        <b id="vol">Volver</b><span id="z">🔄</span>
    </p>
   </div>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   </>,
    document.getElementById("main")
 )}
 