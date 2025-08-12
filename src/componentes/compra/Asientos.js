import React from "react";

function Seleccion(x){
    if (x.target.style.backgroundColor === "red" && x.target.style.color === "white") {
        x.target.style.backgroundColor = "rgb(172, 172, 172)";
        x.target.style.color = "black";
    } else {
        x.target.style.backgroundColor = "red";
        x.target.style.color = "white";
    }
}

function Asientos() {
    let numeros = [];

    for (let i = 1; i <= 12; i++) {
        numeros.push(i);
        if (i % 4 === 0 && i !== 12) {
            numeros.push("");
        }
    }

    return (
        <div className="bloque_asientos">
            <div>
                <div>
                    {numeros.map((x) => (
                        <div className="celda" onClick={Seleccion} key={x}>{x}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Asientos;
