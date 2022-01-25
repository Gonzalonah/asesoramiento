import React from "react"
import ReactDOM from "react-dom"
import html from "./index.html"
import "./style.css"

import nav from "./inicio.js"
import sheader from "./stheader.js"

ReactDOM.render(
    <h1>Hola mionf </h1>,
    document.getElementById("app")
)

nav();
sheader();