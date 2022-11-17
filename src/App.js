import logo from './logo.svg';
import './App.css';

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
