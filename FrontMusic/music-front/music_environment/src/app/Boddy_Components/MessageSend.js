import { useState } from 'react';
import { Button } from 'antd';

export default function EnviarMensagem() {
  const [remetente, setRemetente] = useState('');
  const [destinatario, setDestinatario] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8000/enviar-mensagem/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ remetente, destinatario, conteudo }),
    });

    const data = await response.json();
    console.log('Mensagem enviada:', data);
  };

  return (
    <>
      {/* Botão flutuante */}
      <Button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: '50px',
          right: '50px',
          backgroundColor: '#4caf50',
          color: '#fff',
          padding: '25px',
          borderRadius: '70px',
          border: 'none',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
          fontSize: '30px',
          fontWeight: 'bold',
        }}
      >
        +
      </Button>

      {/* Modal para o formulário */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '1000',
          }}
        >
          <div
            style={{
              width: '90%',
              maxWidth: '500px',
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            <h2 style={{ textAlign: 'center', color: '#333' }}>Envie sua Mensagem</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '15px' }}>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '5px',
                    fontWeight: 'bold',
                  }}
                >
                  Seu Email:
                </label>
                <input
                  type="email"
                  value={remetente}
                  onChange={(e) => setRemetente(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                  }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '5px',
                    fontWeight: 'bold',
                  }}
                >
                  Email do Destinatário:
                </label>
                <input
                  type="email"
                  value={destinatario}
                  onChange={(e) => setDestinatario(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                  }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '5px',
                    fontWeight: 'bold',
                  }}
                >
                  Mensagem:
                </label>
                <textarea
                  value={conteudo}
                  onChange={(e) => setConteudo(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    resize: 'vertical',
                    minHeight: '100px',
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  backgroundColor: '#4caf50',
                  color: '#fff',
                  fontWeight: 'bold',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Enviar
              </button>
            </form>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                marginTop: '10px',
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                backgroundColor: '#f44336',
                color: '#fff',
                fontWeight: 'bold',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}