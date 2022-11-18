import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import { Registro } from '../pages/Register/Register';
import ActividadScreen from '../pages/Actividad/actividadScreen';
import Estadisticas from '../pages/Estadisticas/estadisticas';

const RoutesApp = () => {
  return (
    <>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/Register' element={<Registro />} />
        <Route path='actividades' element={<ActividadScreen />} />
        <Route path='estadisticas' element={<Estadisticas />} />
      </Routes>
    </>
  );
};

export default RoutesApp;
