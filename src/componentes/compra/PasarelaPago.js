import React, { useState } from 'react';

const PasarelaPago = ({ totalEntradas, cantidades }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    numeroTarjeta: ''
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePagar = (event) => {
    event.preventDefault();

    const { nombre, numeroTarjeta } = formData;

    if (nombre.trim() === '' || numeroTarjeta.trim() === '') {
      alert('Por favor completa todos los campos.');
      return;
    }
    if (!/^\d{16}$/.test(numeroTarjeta.trim())) {
      alert('Por favor ingresa un número de tarjeta válido (16 dígitos numéricos).');
      return;
    }
    alert(`Pago exitoso. Nombre: ${nombre}, Número de Tarjeta: ${numeroTarjeta}, Monto a Pagar: S/. ${totalEntradas}`);
  };

  return (
    <div className='pasarela-pagos'>
      <p>Total a pagar: S/. {totalEntradas}</p>
      <p>Entradas generales: {cantidades.general}</p>
      <p>Entradas de mayores: {cantidades.mayores}</p>
      <p>Entradas de niños: {cantidades.ninos}</p>
      <form onSubmit={handlePagar}>
        <label>
          Nombre:
          <input
            type='text'
            name='nombre'
            value={formData.nombre}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Número de Tarjeta:
          <input
            type='text'
            name='numeroTarjeta'
            value={formData.numeroTarjeta}
            onChange={handleInputChange}
            maxLength={16}
            pattern='\d{16}'
            title='Por favor ingresa 16 dígitos numéricos'
            required
          />
        </label>
        <br />
        <button type='submit'>Pagar</button>
      </form>
    </div>
  );
};
export default PasarelaPago;
