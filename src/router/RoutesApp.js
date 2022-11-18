import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import { Registro } from '../components/Register';
import ActividadScreen from '../pages/Actividad/actividadScreen';

const RoutesApp = () => {
  return (
    <>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/Register' element={<Registro />} />
        <Route path='/actividades' element={<ActividadScreen />} />
      </Routes>
    </>
  );
};

export default RoutesApp;
