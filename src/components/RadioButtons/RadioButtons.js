import React from "react";
import "./RadioButtons.css"; // Adicione um arquivo CSS para estilos

export default function RadioButtons({
  titulo,
  opcoes,
  valorSelecionado,
  onChange,
}) {
  const handleChange = (event) => {
    const novoValor = parseInt(event.target.value, 10);
    onChange(novoValor);
  };

  return (
    <div className="radio-buttons-container">
      <h2>{titulo}</h2>
      <div className="radio-buttons-grid">
        {opcoes.map((opcao, index) => (
          <label key={opcao} className="radio-button-label">
            <input
              type="radio"
              value={index}
              checked={valorSelecionado === index}
              onChange={handleChange}
            />
            {opcao}
          </label>
        ))}
      </div>
    </div>
  );
}
