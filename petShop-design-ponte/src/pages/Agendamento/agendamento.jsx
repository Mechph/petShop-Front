import './Estilo-agendamento.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

/*AgendamentoProp {
  id: String
  data: String
  servico: {
    id: String
    nome: String
    valor: Number
  }
  cliente: {
    id: String
    nome: String
  }
  pets: {
    id: String
    nome: String
  }
}*/

// Implementar uma requisicao do graphQL
function Agendamento() {
  const [agendamentos, setAgendamentos] = useState <> ()

  const api = axios.create({
    baseURL: "http://localhost:8080"
  })

  // Integração do axios no GraphQl

  const FETCH_USERS_QUERY = `query {
    agendamentos {
        id
        data
        servico {
            id
            nome
            valor
        }
        cliente {
            id
            nome
        }
        pets {
            id
            nome
        }
    }
  }`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.post(
          '/graphql',  // Substitua pelo seu endpoint GraphQL
          {
            query: FETCH_USERS_QUERY
          },
          {
            headers: {
              'Content-Type': 'application/json',
            }
          }
        );

        console.log(response.data.data)

      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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