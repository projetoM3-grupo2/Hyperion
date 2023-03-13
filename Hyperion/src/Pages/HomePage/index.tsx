import { Header } from "../../components/Header";
import { HomeStyled, About, HomeStart, Hero, Overlay, WaveBG } from "./style";
import Image from '../../assets/img/wave.png'

export const Home = () => {
  return (
    <HomeStyled>
        <Header />
        <Overlay />
      <HomeStart>
        <Hero>
          <h1>遊戯</h1>
          <span>O seu universo de games</span>
        </Hero>
      </HomeStart>
      <About>
        <h2>Hyperion - Sobre</h2>
        <span>Site criado para aprensentar o nosso projeto da Kenzie Academy</span>
        <h2>Hyperion - Integrantes</h2>
        <ul>
          <li>
            <img src="https://avatars.githubusercontent.com/u/107319103?v=4" alt="" />
            <span>Vitor</span>
            <a href="https://github.com/theonlyvitor">Github</a>
            <a href="https://www.linkedin.com/in/vitorhugorm/">Linkedin</a>
          </li>
          <li>
            <img src="https://avatars.githubusercontent.com/u/107319103?v=4" alt="" />
            <span>Geraldo</span>
            <a href="https://github.com/theonlyvitor">Github</a>
            <a href="https://www.linkedin.com/in/geraldo-pereira/">Linkedin</a>
          </li>
          <li>
            <img src="https://avatars.githubusercontent.com/u/107319103?v=4" alt="" />
            <span>Rafhel</span>
            <a href="https://github.com/theonlyvitor">Github</a>
            <a href="https://www.linkedin.com/in/vitorhugorm/">Linkedin</a>
          </li>
          <li>
            <img src="https://avatars.githubusercontent.com/u/107319103?v=4" alt="" />
            <span>Lucas</span>
            <a href="https://github.com/theonlyvitor">Github</a>
            <a href="https://www.linkedin.com/in/vitorhugorm/">Linkedin</a>
          </li>
          <li>
            <img src="https://avatars.githubusercontent.com/u/107319103?v=4" alt="" />
            <span>Matheus</span>
            <a href="https://github.com/theonlyvitor">Github</a>
            <a href="https://www.linkedin.com/in/vitorhugorm/">Linkedin</a>
          </li>
        </ul>
        <h2>ありがとう</h2>
        <span>“Arigathanks” :P</span>
        <WaveBG src={Image} alt="wave Image" />
      </About>
    </HomeStyled>
  )
}
