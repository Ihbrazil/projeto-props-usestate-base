import estilo from '../App/App.module.css';
import { useState } from "react";

export default function App() {
  {/*importação das imagens*/}
  const imagemCachorro ="./assets/cachorro.jpg";
  const imagemGato = "./assets/gato.jpg";

  let imagemAnimal = "";
  let informacaoAnimal = "";
  let tipoAnimal = "Cachorro";

  const [tipoDoComponenteCard, setTipoDoComponenteCard] = useState("cachorro");

  const alterarState = () => {
    if (tipoDoComponenteCard === "cachorro") {
      setTipoDoComponenteCard("gato");
    } else {
      setTipoDoComponenteCard("cachorro");
    }
  };

  if (tipoDoComponenteCard === "cachorro") {
    imagemAnimal = imagemCachorro;
    informacaoAnimal = "É um mamífero carnívoro da família dos canídeos.";
    tipoAnimal = "Cachorro";
  } else {
    imagemAnimal = imagemGato;
    informacaoAnimal = "É um mamífero carnívoro da família dos felídeos.";
    tipoAnimal = "Gato";
  }

  return (
    <div className="estilo.App">
      {/* componente Topo */}
      <header className={estilo.cabecalho}>
        <h1>Projeto Props + useState</h1>
        <p>Clique no botão para mudar os componentes abaixo</p>
        <button onClick={alterarState} className={estilo.botao}>Mudar Animal</button>
      </header>

      {/* Compomente CardAnimal */}
      <div className={estilo.Card}>
      <div className={estilo.CardAnimal}>
        <img src={imagemAnimal} alt="animal" />
      </div>

      {/* Componente CardInformacoes */}
      <div className={estilo.CardInformacao}>
        <h3>Informação sobre o {tipoAnimal}</h3>
        <p>{informacaoAnimal}</p>
      </div>
      </div>
    </div>
  );
}