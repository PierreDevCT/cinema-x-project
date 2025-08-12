
import React from 'react';
import './App.css';
import Contactanos from './componentes/formularios/Contactanos';
import DetalleCartelera from './componentes/peliculas/DetalleCartelera';
import Compra from './paginas/Compra';
import DetalleProximos from './paginas/DetalleProximos';
import IniciarSesion from './paginas/IniciarSesion';
import Inicio from './paginas/Inicio';
import MasQueCine from './paginas/MasQueCine';
import Peliculas from './paginas/Peliculas';
import Promociones from './paginas/Promociones';
import Registrarse from './paginas/Registrarse';
import Menu from './componentes/estaticos/Menu';
import Pie from './componentes/estaticos/Pie';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="contenedor">
      <Menu className="menu"/>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/peliculas" element={<Peliculas/>} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/mas-cine" element={<MasQueCine/>} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        <Route path="/registrarse" element={<Registrarse/>} />
        <Route path="/pelicula/:peliId" element={<DetalleCartelera />} />
        <Route path="/proximos-estrenos/:proxId" element={<DetalleProximos />} />
        <Route path="/otros" element={<Contactanos/>} />
        <Route path="/horarios" element={<Compra/>} />
      </Routes>
      <Pie/>
    </div>
  );
}

export default App;
