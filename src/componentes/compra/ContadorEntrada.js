import React, { useState, useEffect } from 'react';
import PasarelaPago from './PasarelaPago';

function ContadorEntrada() {
  const [cantidades, setCantidades] = useState({ general: 0, mayores: 0, ninos: 0 });
  const precios = { general: 22.5, mayores: 15, ninos: 7 };
  const [mostrarPasarela, setMostrarPasarela] = useState(false);
  const [totalEntradas, setTotalEntradas] = useState(0);

  const sumar = (tipo) => {
    setCantidades({ ...cantidades, [tipo]: cantidades[tipo] + 1 });
  };

  const restar = (tipo) => {
    if (cantidades[tipo] > 0) {
      setCantidades({ ...cantidades, [tipo]: cantidades[tipo] - 1 });
    }
  };

  const handleComprarEntradas = () => {
    const total = cantidades.general * precios.general + cantidades.mayores * precios.mayores + cantidades.ninos * precios.ninos;
    setTotalEntradas(total);
    setMostrarPasarela(true);
  };

  useEffect(() => {
    const total = cantidades.general * precios.general +
      cantidades.mayores * precios.mayores +
      cantidades.ninos * precios.ninos;

    setTotalEntradas(total);
  }, [cantidades, precios]);

  return (
    <div className='bloque-compra'>
      <h1>Compra de Entradas</h1>
      {mostrarPasarela ? (
        <PasarelaPago totalEntradas={totalEntradas} cantidades={cantidades} />
      ) : (
        <div>
          <div className='bloque-general'>
            <div className='bloque-descripcion'>
              <h2>General 2D OL</h2>
              <p>S/. {precios.general}</p>
            </div>
            <div className='bloque-cantidad'>
              <div className='bloque-contador'>
                <button className='boton' onClick={() => restar('general')}>-</button>
                <span>{cantidades.general}</span>
                <button className='boton' onClick={() => sumar('general')}>+</button>
              </div>
              <p>Total a pagar por general: S/. {cantidades.general * precios.general}</p>
            </div>
          </div>

          <div className='bloque-general'>
            <div className='bloque-descripcion'>
              <h2>Mayores 60 años</h2>
              <p>S/. {precios.mayores}</p>
            </div>
            <div className='bloque-cantidad'>
              <div className='bloque-contador'>
                <button className='boton' onClick={() => restar('mayores')}>-</button>
                <span>{cantidades.mayores}</span>
                <button className='boton' onClick={() => sumar('mayores')}>+</button>
              </div>
              <p>Total a pagar por mayores: S/. {cantidades.mayores * precios.mayores}</p>
            </div>
          </div>

          <div className='bloque-general'>
            <div className='bloque-descripcion'>
              <h2>Niños 2D OL</h2>
              <p>S/. {precios.ninos}</p>
            </div>
            <div className='bloque-cantidad'>
              <div className='bloque-contador'>
                <button className='boton' onClick={() => restar('ninos')}>-</button>
                <span>{cantidades.ninos}</span>
                <button className='boton' onClick={() => sumar('ninos')}>+</button>
              </div>
              <p>Total a pagar por niños: S/. {cantidades.ninos * precios.ninos}</p>
            </div>
          </div>

          <div className='bloque-total'>
            <p>Total a pagar: S/. {totalEntradas}</p>
            <div className='cont-boton-comprar'>
              <button className='boton-comprar' onClick={handleComprarEntradas}>Comprar Entradas</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContadorEntrada;
