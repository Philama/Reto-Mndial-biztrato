import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ActividadScreen from './pages/Actividad/actividadScreen';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<ActividadScreen />} />
          <Route path='actividades' element={<ActividadScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
