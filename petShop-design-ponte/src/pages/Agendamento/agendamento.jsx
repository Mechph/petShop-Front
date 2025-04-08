import './Estilo-agendamento.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

// Implementar uma requisicao do graphQL
function Agendamento() {

  const api = axios.create({
    baseURL: "http://localhost:8080/api"
  })

  // Integração do axios no GraphQl

const FETCH_USERS_QUERY = `
  query {
    users {
      id
      name
    }
  }
`;

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'https://your-graphql-endpoint.com/graphql',  // Substitua pelo seu endpoint GraphQL
          {
            query: FETCH_USERS_QUERY
          },
          {
            headers: {
              'Content-Type': 'application/json',
            }
          }
        );
        
        setUsers(response.data.data.users); // Aqui você acessa os dados retornados da query
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Users:</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

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

export default Agendamento