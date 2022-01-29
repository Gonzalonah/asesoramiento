import React from 'react';
import ReactDOM from 'react-dom';
import head from './head.jpg';
import cuerpo from './cuerpo.png';
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
    <h2 className="text">Dibujo Técnico</h2>
    <h3 className="text">Introducción</h3>
    <p className="text">
    El dibujo técnico es un sistema de representación gráfica de diversos tipos de objetos, con el propósito de proporcionar información suficiente para facilitar su análisis, ayudar a elaborar su diseño y posibilitar su futura construcción y mantenimiento.
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
    </p>
   </div>
   <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
   <div id="htms">
    <h4 className="text">Html</h4>
    <p className = "text"> 
        Este contenedor es el contenedor general del estándar web, el encargado de posicionar la web en un “radar” para que nuestro sitio esté más arriba en los resultados de búsqueda. En este vamos a configurar el lenguaje con el atributo lang= ”idioma”, puede ser español (es), inglés (en), entre otros.
        <br></br>
        Dentro de este van a estar ubicados el head y el body, la cabecera y el cuerpo del mismo.
   
    </p>
   </div>
   <div id="heads">
    <h4 className="text">Head</h4>
    <p className = "text"> 
        Este contenedor es la cabecera de nuestra pagina, acá van a estar todos los datos, metadatos y referencias a otros objetos( archivos java, ajax, css y demás). También tendremos el nombre de nuestra página.
        <br></br>
        <img src={head} alt="head cabecera pestaña" id="heading"></img>
       <br></br> Para cambiarlo vamos a usar la etiqueta &lt;title&gt;Recibidos (47) - gnrolon@itel.edu.ar &lt;/title&gt;.
        <br></br><br></br>Para poner el logo/ icono de nuestra página lo pondremos así
        &lt;link rel="shortcut icon" href="img/favicon.png"&gt; y este tiene que ser una imagen de máximo 10px*10px.  Para hacer referencia a otro objetos
        &lt;link rel="stylesheet" href="css/estilos.css"&gt; o tambien &lt;script defer src=''script.js''&gt;&lt;/script&gt;.
        <br></br><br></br>Si se quiere poner el autor o algún metadato relevante se escribe&lt;meta name="author" content="Gonzalo Nahuel Rolón"&gt;.
        <br></br></p>
        <p className="text">Ya que todos los procesadores de html funcionan en un inglés genérico van a caracteres que no los pueda procesar, pero para corregir ese “error” vamos a poner esto <code>&lt;meta charset="utf-8"&gt;</code></p>
   </div>
   <div id="bodys">
        <h4 className="text">Body</h4>
    <p className = "text"> 
        Este es nuestro cuerpo, acá va a estar nuestra interfaz gráfica, donde se va a ver todo lo que pongamos en él.  Hay muchas etiquetas pero vamos a empezar por las más básicas.<br></br>
        
    </p>
   </div>
   <div id="etis">
    <h3 className="text">Etiquetas de texto:</h3>
    <h5 className="text">Etiquetas H</h5>
    <p className="text">En todas las etiquetas H son requeridas etiquetas de apertura y de cierre, o sea 
        <code>&lt;h1&gt;hola&lt;/h1&gt;</code>
    </p>
    <h5 className="text">H1: Etiqueta de títulos</h5>
    <p className="text">
        El H1 es una etiqueta que se utiliza para identificar aquellas frases que conforman el título principal de un contenido de una página web. Cabe destacar que cada página de tu website, por ejemplo, cada entrada de blog, debe tener sus propios heading tags (h1, h2, h3, h4) configurados. Particularmente, el H1 debe resumir en una frase todo lo que representa la página.<br></br>
        Tus heading tags H1 deben personalizarse para el contenido de cada página de tu sitio web. Es decir, lo recomendable es que los H1 permitan que los rastreadores conecten con el núcleo central de tu artículo y no, con tu empresa por ejemplo, ya que una práctica errónea también es la de colocar el nombre de la empresa como H1 en todas las entradas de blog o páginas inherentes.
   
    </p>

    <h5 className="text">Etiqueta P</h5>
    <p className="text">
        La etiqueta &lt;p&gt; en HTML define un párrafo. Estas tienen etiqueta de apertura y cierre. Por lo tanto, todo lo mencionado en &lt;p&gt; y &lt;/p&gt; se trata como un párrafo. La mayoría de los navegadores leen una línea como un párrafo, incluso si no usamos la etiqueta de cierre, es decir, &lt;/p&gt;, pero esto puede generar resultados inesperados al momento de la visualización. Entonces, es una buena convención y debemos usar la etiqueta de cierre.
    </p>
    
    </div>
   </>,
    document.getElementById("main")
 )}
 