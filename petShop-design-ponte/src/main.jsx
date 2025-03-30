import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import Home from './pages/Home/Página_Principal'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
