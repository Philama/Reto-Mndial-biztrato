import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Registro } from '../pages/Register/Register';
import ActividadScreen from '../pages/Actividad/actividadScreen';
import Estadisticas from '../pages/Estadisticas/estadisticas';
import Home from '../pages/Home/home';
import Contacto from '../pages/Contacto/contacto';

const RoutesApp = () => {
  return (
    <>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/Register' element={<Registro />} />
        <Route path='actividades' element={<ActividadScreen />} />
        <Route path='estadisticas' element={<Estadisticas />} />
        <Route path='contacto' element={<Contacto />} />
      </Routes>
    </>
  );
};

export default RoutesApp;
