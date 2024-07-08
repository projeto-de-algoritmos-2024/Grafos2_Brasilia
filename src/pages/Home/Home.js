import React, { useState } from "react";
import RadioButtons from "../../components/RadioButtons/RadioButtons.js";
import { main, Graph } from "../../backend.js"; // Importa a função main e a classe Graph do backend
import "./Home.css";

export default function App() {
  const [origem, setOrigem] = useState(null);
  const [destino, setDestino] = useState(null);
  const [resultado, setResultado] = useState(null); // Estado para armazenar o resultado
  const [erro, setErro] = useState(null); // Estado para armazenar a mensagem de erro

  const handleOrigemChange = (novaOrigem) => {
    setOrigem(novaOrigem);
    setErro(null); // Limpa a mensagem de erro ao selecionar uma nova origem
  };

  const handleDestinoChange = (novoDestino) => {
    setDestino(novoDestino);
    setErro(null); // Limpa a mensagem de erro ao selecionar um novo destino
  };

  const handleSubmit = () => {
    if (origem !== null && destino !== null) {
      const g = new Graph(19); // Cria uma nova instância do grafo
      const resultado = main(origem, destino, g); // Chama a função main com origem e destino
      setResultado(resultado); // Armazena o resultado no estado
      setErro(null); // Limpa qualquer mensagem de erro existente
    } else {
      setResultado(null); // Limpa o resultado anterior
      setErro("Por favor, selecione uma origem e um destino.");
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

  const converterCaminhoParaNomes = (caminho) => {
    return caminho.map((indice) => opcoes[indice]);
  };

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
      {erro && <p className="erro">{erro}</p>}
      {resultado && (
        <div>
          <p>Custo: {resultado.custo}</p>
          <p>
            Caminho: {converterCaminhoParaNomes(resultado.caminho).join(" <- ")}
          </p>
        </div>
      )}
    </div>
  );
}
