import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import Home from './pages/Home/Pagina_Principal'
import Cliente from './pages/Cliente/'
import Agendamento from './pages/Agendamento/agendamento'
import Pet from './pages/Pet/pet'
import Servico from './pages/Servico/servico'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <Cliente />
    <Agendamento />
    <Pet />
    <Servico />
  </StrictMode>,
)
