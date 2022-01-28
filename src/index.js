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