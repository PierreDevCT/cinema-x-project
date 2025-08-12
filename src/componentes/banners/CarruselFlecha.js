import React, { useEffect, useRef, useState } from "react";
import DatosProximos from "../datos/DatosProximos";

function CarruselFlechas(){

    const listaRef = useRef();
    const [actualIndex, setActualIndex] = useState(0);

    useEffect(() => {
        const listaN = listaRef.current;
        const imgN = listaN.querySelectorAll("li > img")[actualIndex];

        if (actualIndex != 0) {
            imgN.scrollIntoView({
                behavior: "auto"
            });
        }
    }, [actualIndex]);

    //Función para flecha
    const irImagen = (direccion) => {
        if(direccion === 'ant') {
            setActualIndex(actual => (actual === 0 ? 0 : actual - 1)); 
        } else {
            setActualIndex(actual => (actual === DatosProximos.length - 1 ? actual : actual + 1));
        }
    }

    return(
        <div className="contenedor_principal">
            <div className="contenedor_carrusel">
                <div className="flechaIz" onClick={() => irImagen('ant')}>&#10092;</div>
                <div className="flechaDe" onClick={() => irImagen('sig')}>&#10093;</div>
                <div className="contenedor_imagenes">
                    <ul ref={listaRef}>
                        {
                            DatosProximos.map((item, index) => {
                                return <li key={item.id} style={{ display: index === actualIndex ? 'block' : 'none' }}>
                                    <img className="img_carrusel" alt="banners" src={item.banner} width={900} height={500}/>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CarruselFlechas;
