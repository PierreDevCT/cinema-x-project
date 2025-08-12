import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png"

const Menu = () => {
    return (
        <div className="cont-menu">

            <nav >
                <Link className="logo" to={"/"}><img src={logo} alt="logo" /></Link>
                <ul className="menu-lista">
                    <Link to={"/"}><li>Inicio</li></Link>
                    <Link to={"/peliculas"}><li>Peliculas</li></Link>
                    <Link to={"/promociones"}><li>Promociones</li></Link>
                    <Link to={"/mas-cine"}><li>+QCine</li></Link>
                </ul>
                <div className="cont-boton-sesion">
                    <Link to={"/iniciar-sesion"} className="boton-sesion">Iniciar Sesión</Link>
                </div>
            </nav>
        </div>

    )
}

export default Menu;