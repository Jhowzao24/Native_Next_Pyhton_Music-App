"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from "react";
import { FeedbackContext } from "@/app/Boddy_Components/Feed_Audio_Register/FeedbackContext";
import { Button } from "evergreen-ui";

interface Feedback {
  id: number;
  message: string;
  timestamp: string;
  analysis?: string;
}

const HomePage: React.FC = () => {
  const feedbackContext = useContext(FeedbackContext);
  if (!feedbackContext) {
    throw new Error("FeedbackContext deve ser usado dentro de um FeedbackProvider");
  }

  const { feedbacks, addFeedback, removeFeedback } = feedbackContext;
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioChunks, setAudioChunks] = useState<BlobPart[]>([]);

  // Salvar feedback no backend
  const saveFeedback = async (feedback: Feedback) => {
    try {
      await fetch("http://localhost:8000/feedback/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedback),
      });
    } catch (error) {
      console.error("Erro ao salvar feedback no backend:", error);
    }
  };

  // Buscar feedbacks salvos no backend
  const fetchFeedbacks = async () => {
    try {
      const response = await fetch("http://localhost:8000/feedback/");
      const data: Feedback[] = await response.json();
      addFeedback([...data]); // Adiciona todos os feedbacks de uma vez
    } catch (error) {
      console.error("Erro ao buscar feedbacks do backend:", error);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  // Iniciar gravação de áudio
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);
      setAudioChunks([]); // Limpar chunks anteriores

      recorder.ondataavailable = (event) => {
        setAudioChunks((prev) => [...prev, event.data]);
      };

      recorder.start();
      setRecording(true);
    } catch (error) {
      console.error("Erro ao iniciar gravação:", error);
    }
  };

  // Parar gravação de áudio
  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob([...audioChunks], { type: "audio/wav" });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);

        // Analisar áudio antes de salvar
        const analysis = await analyzeAudio(audioBlob);

        const newFeedback: Feedback = {
          id: Date.now(),
          message: "Gravação de áudio concluída.",
          timestamp: new Date().toLocaleString(),
          analysis,
        };

        addFeedback(newFeedback);
        saveFeedback(newFeedback);
      };
      setRecording(false);
    }
  };

  // Analisar o áudio gravado
  const analyzeAudio = async (audioBlob: Blob): Promise<string> => {
    return new Promise((resolve) => {
      const audioContext = new AudioContext();
      const reader = new FileReader();
      reader.readAsArrayBuffer(audioBlob);
      reader.onloadend = async () => {
        const audioBuffer = await audioContext.decodeAudioData(reader.result as ArrayBuffer);
        const duration = audioBuffer.duration;

        // Analisador de frequência
        const analyser = audioContext.createAnalyser();
        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(analyser);
        analyser.connect(audioContext.destination);
        source.start();

        const frequencyData = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(frequencyData);

        // Calcular média das frequências
        const avgFrequency = frequencyData.reduce((sum, value) => sum + value, 0) / frequencyData.length;
        let feedbackMessage = `Duração: ${duration.toFixed(2)} segundos. `;

        if (avgFrequency < 50) {
          feedbackMessage += "Som muito grave, pode estar abafado. ";
        } else if (avgFrequency > 200) {
          feedbackMessage += "Som muito agudo, pode estar distorcido. ";
        } else {
          feedbackMessage += "Frequência equilibrada. ";
        }

        if (duration < 2) {
          feedbackMessage += "Muito curto, tente gravar um áudio mais longo.";
        } else if (duration > 30) {
          feedbackMessage += "Áudio muito longo, considere ser mais objetivo.";
        }

        resolve(feedbackMessage);
      };
    });
  };

  return (
    <main style={{ padding: "20px" }}>
      <h1>Área de Gravação e Feedback</h1>

      <div style={{ marginBottom: "20px" }}>
        <Button
          onClick={recording ? stopRecording : startRecording}
          style={{
            padding: "10px",
            fontSize: "16px",
            backgroundColor: recording ? "red" : "#0070f3", // Azul em vez de 'Highlight'
            color: "white",
          }}
        >
          {recording ? "Parar Gravação" : "Iniciar Gravação"}
        </Button>
        {audioURL && (
          <div style={{ marginTop: "10px" }}>
            <p>Áudio gravado:</p>
            <audio controls src={audioURL} />
          </div>
        )}
      </div>

      <div style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px" }}>
        <h2>Feedbacks Recentes</h2>
        {feedbacks.length > 0 ? (
          feedbacks.map((feedback) => (
            <div
              key={feedback.id}
              style={{
                background: "#f9f9f9",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "8px",
              }}
            >
              <div>
                <p><strong>Mensagem:</strong> {feedback.message}</p>
                <small>{feedback.timestamp}</small>
                {feedback.analysis && (
                  <p><strong>Análise:</strong> {feedback.analysis}</p>
                )}
              </div>
              <Button
                onClick={() => removeFeedback(feedback.id)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#ff6b6b",
                  color: "white",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Remover
              </Button>
            </div>
          ))
        ) : (
          <p>Nenhum feedback disponível.</p>
        )}
      </div>
    </main>
  );
};

export default HomePage;
