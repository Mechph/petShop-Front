import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="login-box">
        <h2>Possui conta!</h2>
        <div className="avatar"></div>
        <input type="email" placeholder="E-mail*" />
        <input type="password" placeholder="Senha*" />
        <button className="login-btn">Entrar</button>
      </div>

      <div className="register-box">
        <h2>Criar conta!</h2>
        <div className="avatar"></div>
        <input type="email" placeholder="E-mail*" />
        <input type="password" placeholder="Senha*" />
        <input type="password" placeholder="Confirmar Senha*" />
        <button className="register-btn">Concluir</button>
      </div>
    </div>
  );
};

export default Login;
