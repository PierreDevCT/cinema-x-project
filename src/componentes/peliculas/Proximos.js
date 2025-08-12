import React, {Component} from "react";
import { Link } from "react-router-dom";
import DatosProximos from "../datos/DatosProximos";

class Proximos extends Component{

    state = {
        imgs: null
    }

    constructor(props){
        super(props);
        this.state = {
            imgs: DatosProximos.map((x) => 
                <article className="art-estreno">
                    <img className="img-estreno" src={x.imagen} alt={x.titulo}/>
                    <div className="bloque-comprar-detalles">
                        
                        <Link className="ver-detalles" to={"/proximos-estrenos/"+ x.id} id={x.id}>Ver Detalles</Link>
                    </div>
                </article>    
            )
        }
    }

    render() {
        return(
            <div className="conte_estreno">
                <h1 className="hpelis">Próximos Estrenos</h1>
                {this.state.imgs}
            </div>
        )
    }
}

export default Proximos;