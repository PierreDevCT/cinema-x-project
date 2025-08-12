import React from "react";
import img1 from "../img/mascine1.png";
import img2 from "../img/mascine2.png";
import img3 from "../img/mascine3.png";
import { Link } from "react-router-dom";

const imgsMasCine = [{ img: img1, titulo: "Entradas y Combos" }, { img: img2, titulo: "Publicidad" }, { img: img3, titulo: "Alquiler de Salas" }]
// agregarlle titulos como publi, funciones epeciales etc
const ContenidoMasCine = () => {
  return (
    <div>
      <marquee direction="left" scrollamount="10"><h2>Tenemos lo que te interesa</h2></marquee>
      <div className="c-mqc">
        {imgsMasCine.map((x) => (
          <div className="con-mascine-img">
            <Link to={"/otros"}>
              <img alt={x.titulo} src={x.img} />
            </Link>
            <h2>{x.titulo}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContenidoMasCine;