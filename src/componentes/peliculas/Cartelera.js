import React, { Component } from "react";
import DatosCartelera from "../datos/DatosCartelera";
import { Link } from "react-router-dom";

class Cartelera extends Component {
    state = {
        imgs: null
    }

    constructor(props) {
        super(props);
        this.state = {
            imgs: DatosCartelera.map((x) =>
                <article className="art-estreno">
                    <img className="img-estreno" src={x.imagen} alt={x.titulo} />
                    <div className="bloque-comprar-detalles">
                        <Link className="comprar" to={"/horarios"}>Comprar</Link>
                        <Link className="ver-detalles" to={"/pelicula/"+ x.id}id={x.id}>Ver Detalles</Link>
                    </div>
                </article>
            )
        }
    }

    render() {
        return (
            <div className="bloque-cartelera conte_estreno">
                <h1 className="hpelis">Películas en Cartelera</h1>
                <div className="cartelera">
                    {this.state.imgs}
                </div>
            </div>
        )
    }
}

export default Cartelera;