import React from "react";

function Seleccion(x){
    if (x.target.style.backgroundColor === "red" && x.target.style.color === "white") {
        x.target.style.backgroundColor = "";
        x.target.style.color = "";
    } else {
        x.target.style.backgroundColor = "red";
        x.target.style.color = "white";
    }
}


function Horarios() {
    return (
        <div className="bloque_horarios">
            <div className="contenedor_horario">
                <div className="titulo">
                    <div className="tipo">2D</div>
                    <h3>REGULAR DOBLADA</h3>
                </div>
                <div className="horario" onClick={Seleccion}>14:30</div>
                <div className="horario" onClick={Seleccion}>16:30</div>
                <div className="horario" onClick={Seleccion}>18:30</div>
                <div className="horario" onClick={Seleccion}>20:00</div>
            </div>
            <div className="contenedor_horario">
                <div className="titulo">
                    <div className="tipo">3D</div>
                    <h3>REGULAR DOBLADA</h3>
                </div>
                <div className="horario" onClick={Seleccion}>14:30</div>
                <div className="horario" onClick={Seleccion}>16:30</div>
                <div className="horario" onClick={Seleccion}>18:30</div>
                <div className="horario" onClick={Seleccion}>20:00</div>
            </div>
            <div className="contenedor_horario">
                <div className="titulo">
                    <div className="tipo">2D</div>
                    <h3>REGULAR SUBTITULADA</h3>
                </div>
                <div className="horario" onClick={Seleccion}>14:30</div>
                <div className="horario" onClick={Seleccion}>16:30</div>
                <div className="horario" onClick={Seleccion}>18:30</div>
                <div className="horario" onClick={Seleccion}>20:00</div>
            </div>
        </div>
    )
}

export default Horarios;