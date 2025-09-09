import React, { useState } from 'react';

const Datas = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const jsonData = JSON.stringify(formData);
  const show = [
    <div>
        {jsonData}
    </div>
];

  return (
    <div>
      <h1>Obter Dados</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
        </label>
        <input type="text" name="nome" onChange={handleInputChange} /><br/>
        <label>
          Email:
        </label><br/>
        <input type="email" name="email" onChange={handleInputChange} /><br/>
        <label>
          Telefone:
        </label><br/>
        <input type="tel" name="telefone" onChange={handleInputChange} /><br/>
        <button type="submit">Enviar</button>
      </form>
      {show}
    </div>
  );
};

export default Datas;