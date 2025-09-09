import React, { useState, useEffect } from "react";
import { Button } from "evergreen-ui";

const AppRecording: React.FC = () => {
  const [recordingData, setRecordingData] = useState<Blob | null>(null);
  const [feedback, setFeedback] = useState<string>("");

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then((stream) => {
        console.log("Microfone acessado com sucesso.");
      })
      .catch((error) => {
        console.error("Erro ao acessar o microfone:", error);
      });
  }, []);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start(); // Inicia a gravação
        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            setRecordingData(event.data); // Salva o áudio gravado
          }
        };
        mediaRecorder.onstop = () => {
          console.log("Gravação encerrada.");
        };
      })
      .catch((error) => {
        console.error("Erro ao acessar o microfone:", error);
      });
  };

  const stopRecording = () => {
    console.log("Gravação pausada...");
    // Simula a gravação de áudio como Blob.
    const audio = new Blob(); // Aqui você deve usar o áudio capturado pelo MediaRecorder.
    setRecordingData(audio);
    processFeedback(audio); // Passa o áudio para análise.
  };

  const processFeedback = (audio: Blob) => {
    // Simulação do uso do parâmetro `audio`.
    console.log("Analisando o áudio gravado:", audio);

    // Lógica simulada para fornecer feedback.
    const isOnTempo = true; // Exemplo: verificar ritmo.
    const isOnPitch = false; // Exemplo: verificar altura.

    // Gera o feedback.
    let feedbackMessage = "Feedback:\n";
    feedbackMessage += isOnTempo ? "Ritmo correto.\n" : "Ritmo fora do esperado.\n";
    feedbackMessage += isOnPitch ? "Altura correta." : "Altura fora do esperado.";

    setFeedback(feedbackMessage);
  };

  const saveRecording = () => {
    if (recordingData) {
      // Exemplo de como salvar o áudio como arquivo no navegador.
      const url = URL.createObjectURL(recordingData);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'recording.wav';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };  

  const playRecording = () => {
    if (recordingData) {
      const audioURL = URL.createObjectURL(recordingData);
      const audio = new Audio(audioURL);
      audio.play();
    } else {
      console.error("Nenhuma gravação disponível para reprodução.");
    }
  };


  return (
    <div>
      <h1>Treinamento Musical</h1>
      {feedback && <p>{feedback}</p>}
      <Button onClick={startRecording}>Iniciar Gravação</Button>
      <Button onClick={stopRecording}>Pausar Gravação</Button>
      <Button onClick={saveRecording} disabled={!recordingData}>
        Salvar Gravação
      </Button>
      <Button onClick={playRecording} disabled={!recordingData}>
        Reproduzir Gravação
      </Button>
    </div>
  );
};

export default AppRecording;