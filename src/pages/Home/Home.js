import React, { useState } from "react";
import RadioButtons from "../../components/RadioButtons/RadioButtons.js";
import { main, Graph } from "../../backend.js"; // Importa a função main e a classe Graph do backend
import "./Home.css";

export default function App() {
  const [origem, setOrigem] = useState(null);
  const [destino, setDestino] = useState(null);
  const [resultado, setResultado] = useState(null); // Estado para armazenar o resultado

  const handleOrigemChange = (novaOrigem) => {
    setOrigem(novaOrigem);
  };

  const handleDestinoChange = (novoDestino) => {
    setDestino(novoDestino);
  };

  const handleSubmit = () => {
    if (origem !== null && destino !== null) {
      const g = new Graph(19); // Cria uma nova instância do grafo
      const resultado = main(origem, destino, g); // Chama a função main com origem e destino
      setResultado(resultado); // Armazena o resultado no estado
    } else {
      console.log("Por favor, selecione uma origem e um destino.");
    }
  };

  const opcoes = [
    "Samambaia",
    "Ceilândia",
    "Brazlândia",
    "Sobradinho",
    "Planaltina",
    "Taguatinga",
    "Recanto das Emas",
    "Brasília",
    "Lago norte",
    "Paranoá",
    "Cruzeiro",
    "Guará",
    "Candangolândia",
    "Lago sul",
    "São sebasteão",
    "Núcleo bandeirante",
    "Santa Maria",
    "Gama",
    "Riacho fundo",
  ];

  return (
    <div className="container">
      <RadioButtons
        titulo="Origem"
        opcoes={opcoes}
        valorSelecionado={origem}
        onChange={handleOrigemChange}
      />
      <RadioButtons
        titulo="Destino"
        opcoes={opcoes}
        valorSelecionado={destino}
        onChange={handleDestinoChange}
      />
      <button onClick={handleSubmit}>Enviar</button>
      {resultado && (
        <div>
          <p>Custo: {resultado.custo}</p>
          <p>Caminho: {resultado.caminho.join(" -> ")}</p>
        </div>
      )}
    </div>
  );
}
