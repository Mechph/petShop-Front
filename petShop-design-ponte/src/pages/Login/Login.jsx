import React, { useState } from "react";
import "./Login.css";
import { Link } from 'react-router-dom';
import axios from "axios";

const Login = () => {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const api = axios.create({
    baseURL: "http://localhost:8080/api"
  })

  // Realizar operacoes que levem o cliente para uma outra tela
  const handleLogin = async () => {
    try {
      // A rota certo -> /api/login
      const response = await api.post("/login", {
        email: loginEmail,
        password: loginPassword
      });
      console.log(response.data.token)
      
    } catch (error) {
      console.error(error)
      alert(error.response?.data?.message || "Erro no login");
    }
  };

  
  const handleRegister = async () => {
    if (registerPassword !== confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }

    try {
      // A rota certa -> /api/register
      const response = await api.post("/register", {
        email: registerEmail,
        password: registerPassword,
        nome: "Usuário",
        local: "online"  
      });
      alert("Conta criada com sucesso!");
    } catch (error) {
      alert(error.response?.data?.message || "Erro no registro");
    }
  };

  return (
    <div>
      <nav className="navbar">
        <ul className="nav-list">
          <li><Link to="/">Voltar ao Início</Link></li>
        </ul>
      </nav>

      <div className="container">
        {/* Login */}
        <div className="login-box">
          <h2>Possui conta!</h2>
          <div className="avatar"></div>
          <input
            type="email"
            placeholder="E-mail*"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha*"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button className="login-btn" onClick={handleLogin}>
            Entrar
          </button>
        </div>

        {/* Registro */}
        <div className="register-box">
          <h2>Criar conta!</h2>
          <div className="avatar"></div>
          <input
            type="email"
            placeholder="E-mail*"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha*"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirmar Senha*"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="register-btn" onClick={handleRegister}>
            Concluir
          </button>
        </div>
      </div>

      <footer>
        &copy; 2025 PetShop. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Login;
