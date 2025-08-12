import React from "react"
import Abanico from "../componentes/banners/Abanico";

const Promociones = () => {
    return (
        <div className="conte_promociones">
            <marquee direction="left" scrollamount="10"><h2>No te pierdas de las mejores Promociones!</h2></marquee>
            <Abanico/>
        </div>
    )
}

export default Promociones;