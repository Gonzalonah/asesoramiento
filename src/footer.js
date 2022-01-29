import ReactDOM from "react-dom";
import React from "react";
import tw from './twitter.svg';
import ig from './instagram.svg';


export default function foot(){
ReactDOM.render(<>
           <section className="footer">
                   <section id="copy"> <p className="text">Copyright &copy; 2022 Gonzalo Nahuel Rolón. All rights reserved</p></section>
                   <section id="redes">
                           <a href="https://twitter.com/StupidBoy171"><img src={tw}></img></a>
                           <br></br>
                           <a href="https://www.instagram.com/gonzalo.ok17"><img src={ig}></img></a>
                   </section>
           </section>
           </>,

        document.getElementById("foot")
)}


