import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import DatosCartelera from "../datos/DatosCartelera";


const DetalleCartelera = () => {

  const {peliId} = useParams();

  const pelicula = DatosCartelera.find(peli => peli.id === parseInt(peliId));
  console.log(pelicula);
  if (!pelicula) {
    return <div>Película no encontrada.</div>;
  }
  
  return(
    <div>
      <div className="cont-dsc" style={{backgroundImage: `url(${pelicula.banner})`, backgroundBlendMode:"hue"}}>
        <img src={pelicula.imagen} alt="imagen"/>
        <div>
          <h3>{pelicula.titulo}</h3>
          <p>
          <span>{pelicula.anio} | </span>
          <span>{pelicula.duracion} | </span>
          <span>{pelicula.genero}</span>
          </p>
          
          <p>{pelicula.desc}</p>
            <p>
              <span>Director: {pelicula.director}</span>
            </p>
          <div className="cont-comprar">
            <a className="comprar irT" href="#trailer">Ver tráiler</a>
            <Link className="comprar" to={"/horarios"}>Comprar</Link>
          </div>
        </div>
      </div>
      <div id="trailer" className="cont-video">
        <iframe 
      src={pelicula.video} 
      title={pelicula.titulo}
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default DetalleCartelera;