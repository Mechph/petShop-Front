import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './Home.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className='titulo-da-pagina'>
      <h1>Olá, seja bem vindo(a), é um prazer ter você aqui! 🎉 <br />Agora você faz parte da nossa família pet, <br />onde oferecemos os melhores serviços para cuidar <br />do seu bichinho com carinho e dedicação. 🐶🐱✨</h1>
      <br />
      <p>Agende já um dos nossos serviços para seu Pet</p>
    </div>
  )
}

export default Home
