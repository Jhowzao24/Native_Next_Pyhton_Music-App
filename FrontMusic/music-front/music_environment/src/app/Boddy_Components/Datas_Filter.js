import React, { useState, useEffect } from 'react';

function UserPanel() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Simulando uma chamada à API para obter os dados dos usuários
    // Substitua esta lógica pela chamada real à sua API
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/Urls/ViewsStudy/');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Erro ao obter dados dos usuários:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filtrar o usuário selecionado quando o ID do usuário for alterado
    if (selectedUserId !== null) {
      const filteredUser = users.find(user => user.id === selectedUserId);
      setSelectedUser(filteredUser);
    }
  }, [selectedUserId, users]);

  const handleUserSelection = (userId) => {
    setSelectedUserId(userId);
  };

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => handleUserSelection(user.id)}>
            {user.Nome}
          </li>
        ))}
      </ul>

      <h2>Detalhes do Usuário Selecionado</h2>
      {selectedUser ? (
        <div>
          <p>ID: {selectedUser.id}</p>
          <p>Nome: {selectedUser.Nome}</p>
          <p>Email: {selectedUser.Sobrenome}</p>
          <p>Email: {selectedUser.WhatsApp}</p>
          <p>Email: {selectedUser.InstrumentoPref}</p>
          <p>Email: {selectedUser.Localidade}</p>
        </div>
      ) : (
        <p>Selecione um usuário para ver os detalhes.</p>
      )}
    </div>
  );
};

export default UserPanel();