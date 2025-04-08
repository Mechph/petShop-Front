import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global.css';
import Home from './pages/Home/Pagina_Principal';
import Cliente from './pages/Cliente/cliente';
import Agendamento from './pages/Agendamento/agendamento';
import Pet from './pages/Pet/pet';
import Servico from './pages/Servico/servico';
import Login from './pages/Login/Login';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/pet" element={<Pet />} />
        <Route path="/servico" element={<Servico />} />
      </Routes>
    </Router>
  </StrictMode>,
);
