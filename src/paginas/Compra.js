import React, { useState } from "react";
import Horarios from "../componentes/compra/Horarios";
import Asientos from "../componentes/compra/Asientos";
import ContadorEntrada from "../componentes/compra/ContadorEntrada";

const Compra = () => {
    const [mostrarHorario, setMostrarHorario] = useState(false);

    const cambioHorario = () => {
        setMostrarHorario(!mostrarHorario);
    }

    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const f = new Date();
    const h = f.getDate();
    const m = f.getDate() + 1;
    const mes = meses[f.getMonth()];

    return (
        <div>
            <div className="conte_horario">
                <div className="fechahoy" onClick={cambioHorario}>
                    {h + " de " + mes}
                </div>
                <div className="fechahoy" onClick={cambioHorario}>
                    {m + " de " + mes}
                </div>
                {mostrarHorario && <Horarios />}
            </div>
            <div className="bloque_asientos_entrada">
                <div className="contenedor_asientos">
                    <h4>Pantalla</h4>
                    <hr></hr>
                    <div className="bloque_asientos"><h4>A</h4><Asientos /></div>
                    <div className="bloque_asientos"><h4>B</h4><Asientos /></div>
                    <div className="bloque_asientos"><h4>C</h4><Asientos /></div>
                    <div className="bloque_asientos"><h4>D</h4><Asientos /></div>
                    <div className="bloque_asientos"><h4>F</h4><Asientos /></div>
                    <div className="bloque_asientos"><h4>G</h4><Asientos /></div>
                    <div className="bloque_asientos"><h4>H</h4><Asientos /></div>
                    <div className="bloque_asientos"><h4>I</h4><Asientos /></div>
                    <div className="bloque_asientos"><h4>J</h4><Asientos /></div>
                </div>
                <ContadorEntrada />
            </div>
        </div>
    )
}

export default Compra;
