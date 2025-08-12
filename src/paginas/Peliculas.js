import React, { useState } from "react"
import Cartelera from "../componentes/peliculas/Cartelera"
import Proximos from "../componentes/peliculas/Proximos"


const Peliculas= () => {
    const [verContenido, setVerContenido] = useState("cartelera")
    const mostrarContenido = (id) => {
        setVerContenido(id)
    }

    return(
        <div>
            <div className="cont-peli-op">
                <button onClick={()=> mostrarContenido("cartelera")}>Cartelera</button>
                <button onClick={()=> mostrarContenido("estrenos")}>Próximos</button>
            </div>
            <div id="cartelera" className={`contenido ${verContenido === "cartelera" ? 'visible' : ''}`}>
                <Cartelera/>
            </div>
            <div id="estrenos" className={`contenido ${verContenido === "estrenos" ? 'visible' : ''}`}>
                <Proximos/>
            </div>
            
            
        </div>
    )
}

export default Peliculas;