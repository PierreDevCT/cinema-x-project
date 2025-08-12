import React from "react";

import fb from '../img/fb.png';
import instagram from '../img/insta.png';
import X from '../img/X.png';
import youtube from '../img/ytbe.png';

function Pie(){
    return (
        <div className="pie">
            <div className="f_pie espacio_seccion">
                <div className="f_pie_links">
                    <div className="f_pie_links_div">
                        <h4>¿Quiénes somos?</h4>
                        <a href="/">
                            <p>Unete al equipo</p>
                        </a>
                        <a href="/">
                            <p>Próximas aperturas</p>
                        </a>
                        <a href="/">
                            <p>Corporativo</p>
                        </a>
                    </div>
                    <div className="f_pie_links_div">
                        <h4>Legales</h4>
                        <a href="/">
                            <p>Términos y Condiciones</p>
                        </a>
                        <a href="/">
                            <p>Política de privacidad</p>
                        </a>
                    </div>
                    <div className="f_pie_links_div">
                        <h4>Condiciones de uso</h4>
                        <a href="/">
                            <p>Declaración de cookies</p>
                        </a>
                    </div>
                    <div className="f_pie_links_div">
                        <h4>Contacto</h4>
                        <a href="/">
                            <p>Contacto de empresa</p>
                        </a>
                        <a href="/">
                            <p>Trabaja con nosotros</p>
                        </a>
                    </div>
                    <div className="f_pie_links_div">
                        <h4>Síguenos en:</h4>
                        <div className="redsocial">
                            <p><a href="https://www.facebook.com"><img src={fb} alt="ícono de Facebook"/></a></p>
                            <p><a href="https://www.instagram.com"><img src={instagram} alt="ícono de Instagram"/></a></p>
                            <p><a href="https://twitter.com"><img src={X} alt="ícono de X"/></a></p>
                            <p><a href="https://www.youtube.com/@ElProfeTI"><img src={youtube} alt="ícono de youtube"/></a></p>
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className="f_pie_abajo">
                    <div className="f_pie_derechos">
                        <p>
                            @{new Date().getFullYear} Cinema X. Todos los derechos reservados.
                        </p>
                    </div>
                    <div className="f_pie_abajo_links">
                        <a href="/"><div><p>Términos y Condiciones</p></div></a>
                        <a href="/"><div><p>Privacidad</p></div></a>
                        <a href="/"><div><p>Seguridad</p></div></a>
                        <a href="/"><div><p>Declaración de cookies</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pie;