import React from "react";
import DatosAbanico from "../datos/DatosAbanico";
import { useState } from "react";

export const Abanico = () => {
    const [imgActual, setImgActual] = useState(0);

    const seleccionador = (index) => setImgActual(index);

    return (
        <section className="abanico_img">
            {DatosAbanico.map((item, index) => {
                const imgSelec = imgActual === index ? "seleccionada" : "";
                return (
                    <div key={item.imagen}
                        className={`imagen_item ${imgSelec}`}
                        onClick={() => seleccionador(index)}>
                        <img src={item.imagen} alt={item.titulo} />
                        <div className="conte_div_desc">
                            <div className="conte_descripcion">
                                <h2>{item.titulo}</h2>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default Abanico;
