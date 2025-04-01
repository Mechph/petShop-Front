import './Home.css';

function Home() {
  return (
    <div>
      {/* barra de home inicio e cadastro */}
      <nav className="navbar">
        <ul className="nav-list">
          <li><a href="#">Início</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Cadastro</a></li>
        </ul>
      </nav>

      {/* organizacao */}
      <div className="container">
        <div className="content">
          <img src="/lobo-removebg-preview.png" alt="Imagem de boas-vindas" />
          <div className="text">
            <h1>Olá, seja bem-vindo(a), é um prazer ter você aqui! 🎉</h1>
            <p>Agora você faz parte da nossa família pet, onde oferecemos os melhores serviços para cuidar do seu bichinho com carinho e dedicação. 🐶🐱✨</p>
            <h2>Agende já um dos nossos serviços para seu Pet</h2>
            <button className="botao">AGENDAR</button>
          </div>
        </div>
      </div>

      <footer>
        &copy; 2025 PetShop. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default Home;