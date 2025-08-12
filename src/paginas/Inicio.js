import React from "react"

import Carrusel from "../componentes/banners/Carrusel"
import Cartelera from "../componentes/peliculas/Cartelera"
import Publicidad from "../componentes/banners/Publicidades"
import CarruselFlechas from "../componentes/banners/CarruselFlecha"
import { Link } from "react-router-dom"



const Inicio = () => {
    return (
        <div className="conte_inicio">
            <Carrusel />
            <div className="conte_cupu">
                <div className="pelis-completo">
                    <Cartelera/>
                </div>
                <Link to={"/promociones"}><Publicidad/></Link>
            </div>
            <CarruselFlechas/>
        </div>
    )
}

export default Inicio;