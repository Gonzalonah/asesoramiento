import React from "react"
import ReactDOM from "react-dom"
import html from "./index.html"
import "./style.css"


import nav from "./inicio.js"



nav();


import $ from 'jquery'


$(document).on('click', '#sistemas', function(){
    window.location.href="./st.html";
});
$(document).on('click', '#lenguajes', function(){
    window.location.href="./lt/lt.html";
});
$(document).on('click', '#programacion', function(){
    window.location.href="./pr/pr.html";
});

