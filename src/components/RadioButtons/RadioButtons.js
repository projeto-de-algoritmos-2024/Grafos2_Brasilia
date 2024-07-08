import React from "react";

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
    <div>
      <label htmlFor={titulo} id="title">
        {titulo}
      </label>
      <br />
      {opcoes.map((opcao, index) => (
        <label key={opcao} id={titulo}>
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
  );
}
