import React,{Component} from "react";

const imagenes = ["/img/publi1.jpg", "/img/publi2.jpg", "/img/publi3.jpg", "img/publi4.jpg"]
  
class Publicidad extends Component {
    state = {
        titulo: "",
        imgpubli: "",
        c: 0
    }

    constructor(props){
        super(props);
        this.state = {
            titulo: "Promociones",
            imgpubli: "img/publi1.jpg",
            c: 0
        }
    }

    render() {
        setTimeout(() => this.setState({
            c: Math.floor(Math.random() * (imagenes.length)),
            imgpubli: imagenes[this.state.c]
        }), 2000);

        return(
            <header className="bloque-publicidad">
                <h1 className="hpubli">{this.state.titulo}</h1>
                <img className="imgpubli" src={this.state.imgpubli} alt="Publicidad"/>
            </header>
        )
    }
}

export default Publicidad;