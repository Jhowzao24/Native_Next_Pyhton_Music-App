/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Typography, Button, Dropdown } from "antd";
import type { MenuProps } from "antd";

type News = {
  key: string;
  title: string;
  snippet: string;
  url: string;
};

type ThemeKey = "claro" | "escuro" | "personalizado";

const InstrumentsNews = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentTheme, setCurrentTheme] = useState<ThemeKey>("claro");

  const themeStyles: Record<ThemeKey, React.CSSProperties> = {
    claro: {
      backgroundColor: "#f0f8ff",
      color: "#000000",
      border: "1px solid #16ffec",
    },
    escuro: {
      backgroundColor: "#090053",
      color: "#ffffff",
      border: "1px solid #033e96",
    },
    personalizado: {
      backgroundColor: "#ffe4b5",
      color: "#1b5e20",
      border: "2px solid #ff9800",
    },
  };

  const menu: MenuProps = {
    items: [
      { key: "claro", label: "Claro" },
      { key: "escuro", label: "Escuro" },
      { key: "personalizado", label: "Personalizado" },
    ],
    onClick: (e) => setCurrentTheme(e.key as ThemeKey), // 'e.key' está tipado corretamente agora
  };


  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://newsapi.org/v2/everything", {
          params: {
            q: "violino OR viola OR violoncelo",
            apiKey: "044a859953f84cd2bac24acfdb135701",
          },
        });
        const articles = response.data.articles.map((article: any, index: number) => ({
          key: index.toString(),
          title: article.title,
          snippet: article.description,
          url: article.url,
        }));
        setNews(articles);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const columns = [
    {
      title: "Título",
      dataIndex: "title",
      key: "title",
      render: (text: string, record: News) => <a href={record.url} target="_blank" rel="noopener noreferrer">{text}</a>,
    },
    {
      title: "Resumo",
      dataIndex: "snippet",
      key: "snippet",
    },
  ];

  return (
    <div style={{ padding: '10px'}}>
      <Typography.Title level={2}>Notícias sobre Violino, Viola e Violoncelo</Typography.Title>
      <Dropdown menu={menu} trigger={["click"]}>
        <Button>
          Escolha o Tema
        </Button>
      </Dropdown>
      <div
        style={{
            ...themeStyles[currentTheme],
            padding: "10px",
            borderRadius: "8px",
            marginTop: "20px",
        }}
      >
        <Table 
            dataSource={news} 
            columns={columns} 
            loading={loading} 
            bordered
            style={{ backgroundColor: "inherit", color: "inherit" }}
      />
      </div>
    </div>
  );
};

export default InstrumentsNews;

/*
import React from "react";
import { Table, Typography } from "antd";

type Instrument = {
  key: string;
  name: string;
  size: string;
  tuning: string;
  function: string;
  musicalStyles: string;
  maintenanceTips: string;
};

const InstrumentsReport = () => {
  // Dados sobre violino, viola e violoncelo
  const data: Instrument[] = [
    {
      key: "1",
      name: "Violino",
      size: "O menor entre os instrumentos de corda friccionada.",
      tuning: "Sol, Ré, Lá, Mi.",
      function: "Melódico e virtuosístico, com som brilhante e penetrante.",
      musicalStyles: "Música clássica, jazz, pop, entre outros.",
      maintenanceTips: "Troque as cordas regularmente, limpe o arco após cada uso.",
    },
    {
      key: "2",
      name: "Viola",
      size: "Maior que o violino, com som mais escuro.",
      tuning: "Dó, Sol, Ré, Lá.",
      function: "Apoio harmônico e tons mais suaves.",
      musicalStyles: "Música clássica e experimental.",
      maintenanceTips: "Mantenha as cravelhas lubrificadas, evite umidade.",
    },
    {
      key: "3",
      name: "Violoncelo",
      size: "Muito maior, tocado apoiado no chão.",
      tuning: "Dó, Sol, Ré, Lá (uma oitava abaixo da viola).",
      function: "Harmonia e solos com som rico e ressonante.",
      musicalStyles: "Música clássica, trilhas sonoras e bandas modernas.",
      maintenanceTips: "Armazene em posição vertical, cuide das cravelhas.",
    },
  ];

  // Colunas da tabela
  const columns = [
    {
      title: "Instrumento",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Tamanho",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Afinação",
      dataIndex: "tuning",
      key: "tuning",
    },
    {
      title: "Função",
      dataIndex: "function",
      key: "function",
    },
    {
      title: "Estilos Musicais",
      dataIndex: "musicalStyles",
      key: "musicalStyles",
    },
    {
      title: "Dicas de Manutenção",
      dataIndex: "maintenanceTips",
      key: "maintenanceTips",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Typography.Title level={2}>Relatório de Instrumentos</Typography.Title>
      <Table dataSource={data} columns={columns} bordered />
    </div>
  );
};

export default InstrumentsReport;
*/