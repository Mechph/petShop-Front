import './Estilo-agendamento.css'
import React from "react"
import { Link } from 'react-router-dom';

// Implementar uma requisicao do graphQL
function Agendamento() {
  return (
    <div>
    <nav className="navbar">
        <ul className="nav-list">
        <li><Link to="/">Voltar ao Início</Link></li>
        </ul>
    </nav>
    <div className='container'>
      <div className="register-box">
        <h2>Criar Agendamento!</h2>
        <div className="avatar"></div>
        <input type="text" placeholder="Tipo de Serviço*" />
        <input type="text" placeholder="Nome do Cliente*" />
        <input type="text" placeholder="Nome do Pet*" />
        <input type="email" placeholder="E-mail*" />
        <input type="password" placeholder="Senha*" />
        <button className="register-btn">Concluir Agendamento</button>
        </div>
      </div>
      <footer>&copy; 2025 PetShop. Todos os direitos reservados.</footer>
    </div>
  );
}

export default Agendamento;
