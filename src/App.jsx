import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UseStateComp from './components/UseState/UseStateComp';
import UseEffectComp from './components/UseEffectComp/UseEffectComp';

import { YugiohContextProvider } from './components/context/YugiohContext'; // Importa el contexto completo

const App = () => {
  return (
    <Router>
      <YugiohContextProvider> {/* Envuelve la aplicación con el proveedor del contexto */}
        <Routes>
          <Route path="/" exact element={<UseStateComp />} /> {/* Usa 'element' en vez de 'component' */}
          <Route path="/use-effect" element={<UseEffectComp />} />
          {/* Add more routes as needed */}
        </Routes>
      </YugiohContextProvider>
    </Router>
  );
};

export default App;
