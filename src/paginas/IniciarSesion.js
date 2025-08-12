import React, { useState } from "react";
import { Link } from "react-router-dom";

const usuarios = [
    {nombresusuario: 'usuario1', contrasena: 'contraseña1'},
    {nombresusuario: 'usuario2', contrasena: 'contraseña2'},
    {nombresusuario: 'usuario3', contrasena: 'contraseña3'},
    {nombresusuario: 'usuario4', contrasena: 'contraseña4'},
    {nombresusuario: 'usuario5', contrasena: 'contraseña5'}
]
const IniciarSesion = () => {

    const [nombresusuario, setNombreUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const usuarioEncontrado = usuarios.find(
            (usuario) => usuario.nombresusuario === nombresusuario && usuario.contrasena === contrasena
        )

        if(usuarioEncontrado) {
            alert(`bienvendo(a) ${usuarioEncontrado.nombresusuario}`)
            window.location.href = '/'
        }else{
            alert('el usuario y/o contraseña son incorrectos')
            
        }
    }
    return (
        <div className="contenedor-form">
           <div className="iniciar-sesion">
            <h1>Iniciar sesión</h1>
            <form onSubmit={handleSubmit}>
                <label name="name">Usuario</label>
                <input 
                id="UserName"
                name="UserName" 
                type="text" 
                value={nombresusuario}
                placeholder="ingrese su usuario" 
                onChange={(e) => setNombreUsuario(e.target.value)}
                required />

                <label name="password">Contraseña</label>
                <input 
                id="password" 
                name="password" 
                type="password" 
                value={contrasena}
                placeholder="ingrese su contraseña" 
                onChange={(e) => setContrasena(e.target.value)}
                required />
            <div className="b-s">
                <button className="boton-sesion"type="submit">Iniciar Sesión</button>
            </div>
            <div>
                <p>
                    ¿Aun no tienes una cuenta? 
                    <Link to={"/registrarse"}>Regístrate aquí</Link>
                </p>
            </div>
            </form>
            
        </div> 
        </div>
        
    )
}

export default IniciarSesion;