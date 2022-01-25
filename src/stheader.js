import React from "react"
import ReactDOM from "react-dom"
import svg from "./831052.svg"
export default function sheader (){
    ReactDOM.render(<>
        <section id = "stheaders">
            <header>
                <a href = "#"> <img src = {svg} className = "header"></img></a>
            </header>

        </section>
        </>,
        document.getElementById("stheader")
    )
}