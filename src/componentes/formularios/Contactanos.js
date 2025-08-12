import React, { useState } from "react";

const Contactanos = () => {

  const[tipos, setTipos] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('El envío se realizó correctamente')
    window.location.href = '/'
  }
  

  return(
    <div className="cont-masCine">
      <div className="contenido-masCine">
          <div>
          <h2>Contáctanos</h2>
          <p>Cuéntanos un poco más sobre tu solicitud y nuestro equipo se pondrá en contacto</p>
        </div>
      <div className="cont-pedido">
        <form className="terminos" onSubmit={handleSubmit}>
        <div className="p s">
          <label htmlFor="productos" >Opción de Interés</label>
          <select 
          name="productos" 
          id="productos"
          value={tipos}
          onChange={(e)=> setTipos(e.target.value)}
          required>
            <option>Funciones Especiales</option>
            <option>Entradas y Combos</option>
            <option >Alquiler de Salas</option>
            <option>Publicidad</option>
          </select>
        </div>
          <label htmlFor="email">Correo Electrónico</label>
          <input 
          type="email" 
          id="email" 
          name="email" 
          required/>

          <label htmlFor="nombre">Nombre Completo</label>
          <input type="text" id="nombre" name="nombre" required/>

          <label htmlFor="telefono">Teleono de contacto</label>
          <input type="text" id="telefono" name="telefono" required/>
          <label className="p">
            <input type="checkbox" required/>
            <p>Acepto los <a href=""> Terminos y condiciones</a></p>
          </label>
          <button className="enviar" >Enviar</button>
        </form>
      </div>
      
      </div>
      
  </div>
  )
}

export default Contactanos;