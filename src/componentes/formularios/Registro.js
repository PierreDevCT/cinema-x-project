import { Link } from "react-router-dom";
const Registrarse = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Gracias por Registrarse')
        window.location.href = '/'
    }
    return (
        <div className="contenedor-form">
           <div className="iniciar-sesion">
            <h1>Registrarse</h1>
            <form onSubmit={handleSubmit}>
                <label name="email">E-mail</label>
                <input 
                id 
                name="email" 
                type="email" 
                placeholder="ingrese su E-mail" 
                required />

                <label name="usuario">Nombre de Usuario</label>
                <input 
                id 
                name="usuario" 
                type="text" 
                placeholder="ingrese un Nombre de Usuario" 
                required />

                <label name="password">Contraseña</label>
                <input id="password" 
                name="password" 
                type="password" 
                placeholder="ingrese su contraseña" 
                required />
                
            <div className="b-s">
                <button className="boton-sesion" >Registrarse</button>
            </div>
            <div>
                <p>
                    ¿Ya tienes una cuenta?
                    <Link to={"/log-in"}>Log In</Link>
                </p>
            </div>
            
            </form>
           
        </div> 
        </div>
        
    )

}

export default Registrarse;