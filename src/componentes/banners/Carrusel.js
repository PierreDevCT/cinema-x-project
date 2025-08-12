import React, { useState, useEffect } from 'react';

import DatosCartelera from '../datos/DatosCartelera';

function Carrusel(){
  const [actualImg, setactualImg] = useState(0);

  const SiguienteImg = () => {
    setactualImg(actualImg === DatosCartelera.length - 1 ? 0 : actualImg + 1);
  };

  useEffect(() => {
    const interval = setInterval(SiguienteImg, 2000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actualImg]);

  const imagenActual = DatosCartelera[actualImg];

  return (
    <div className="carrusel">
      <img
        src={imagenActual.banner}
        alt={imagenActual.titulo}
        className="imgcarrusel"
        width={200}
        height={250}
      />
    </div>
  );
};
export default Carrusel;

