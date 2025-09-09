// src/App.js
import { Button, Carousel, Input } from 'antd';
import React, { useState, useEffect } from 'react';

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TextField,
    Typography,
    Snackbar,
    Alert,
} from '@mui/material';

const AppSearchCards = () => {
    const [cards, setCards] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [editingCardId, setEditingCardId] = useState(null);
    const [searchId, setSearchId] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [error, setError] = useState(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    // Função para carregar todos os cards ao montar o componente
    useEffect(() => {
        const loadCards = () => {
            // Carregar os cards salvos localmente do estado
            const savedCards = JSON.parse(localStorage.getItem('cards')) || [];
            setCards(savedCards);
        };
        loadCards();
    }, []);

    // Função para salvar os cards localmente
    const saveCards = (cards) => {
        localStorage.setItem('cards', JSON.stringify(cards));
        setCards(cards);
    };

    // Função para criar ou atualizar um card
    const handleFinalize = () => {
        if (editingCardId) {
            const updatedCards = cards.map((card) =>
                card.id === editingCardId ? { id: editingCardId, title, description } : card
            );
            saveCards(updatedCards);
            setEditingCardId(null);
            setSnackbarMessage('Card atualizado com sucesso!');
        } else {
            const newCard = { id: (new Date()).toISOString(), title, description };
            const updatedCards = [...cards, newCard];
            saveCards(updatedCards);
            setSnackbarMessage('Card criado com sucesso!');
        }
        setTitle('');
        setDescription('');
        setSnackbarOpen(true);
    };

    // Função para deletar um card
    const handleDelete = (id) => {
        const updatedCards = cards.filter((card) => card.id !== id);
        saveCards(updatedCards);
        setSnackbarMessage('Card deletado com sucesso!');
        setSnackbarOpen(true);
    };

    // Função para buscar um card por ID
    const handleSearch = () => {
        if (!searchId.trim()) {
            setError('Por favor, insira um ID válido.');
            return;
        }
        const card = cards.find((card) => card.id === searchId);
        if (card) {
            setSearchResult(card);
            setError(null);
        } else {
            setError('Card não encontrado.');
            setSearchResult(null);
        }
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <div style={{ padding: '20px' }}>
            <Carousel style={{ height: '400px' }}>
                <h1>Gerenciamento de Cards</h1>

                <div>
                    <h2>{editingCardId ? 'Editar Card' : 'Criar Card'}</h2>
                    <Input
                        type="text"
                        placeholder="Título"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <br />
                    <TextField
                        placeholder="Descrição"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                    <br />
                    <Button style={{ backgroundColor: 'Highlight', color: 'white' }} onClick={handleFinalize}>
                        {editingCardId ? 'Atualizar' : 'Criar'}
                    </Button>
                    {editingCardId && (
                        <Button
                            style={{ backgroundColor: 'yellow', color: 'black' }}
                            onClick={() => {
                                setEditingCardId(null);
                                setTitle('');
                                setDescription('');
                            }}>
                            Cancelar
                        </Button>
                    )}
                </div>

                <div style={{ marginTop: '20px' }}>
                    <Typography variant="h6">Buscar Card por ID</Typography>
                    <TextField
                        label="Digite o ID do card"
                        variant="outlined"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                        style={{ marginRight: '10px' }}
                    />
                    <Button onClick={handleSearch}>Buscar</Button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {searchResult && (
                        <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
                            <Typography variant="h6">{searchResult.title}</Typography>
                            <Typography>{searchResult.description}</Typography>
                            <Button
                                style={{ backgroundColor: 'green', color: 'yellow' }}
                                onClick={() => {
                                    setEditingCardId(searchResult.id);
                                    setTitle(searchResult.title);
                                    setDescription(searchResult.description);
                                }}>
                                Editar
                            </Button>
                            <Button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => handleDelete(searchResult.id)}>Deletar</Button>
                        </div>
                    )}
                </div>

                <div style={{ marginTop: '20px' }}>
                    <Typography variant="h6">Tabela de Cards</Typography>
                    {cards.length > 0 ? (
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Título</TableCell>
                                        <TableCell>Descrição</TableCell>
                                        <TableCell>Ações</TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>
                            <TableBody>
                                {cards.map((card) => (
                                    <TableRow key={card.id}>
                                        <TableCell>{card.id}</TableCell>
                                        <TableCell>{card.title}</TableCell>
                                        <TableCell>{card.description}</TableCell>
                                        <TableCell>
                                            <Button
                                                style={{ backgroundColor: 'blue', color: 'white' }}
                                                onClick={() => {
                                                    setEditingCardId(card.id);
                                                    setTitle(card.title);
                                                    setDescription(card.description);
                                                }}>
                                                Editar
                                            </Button>
                                            <Button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => handleDelete(card.id)}>Deletar</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </TableContainer>
                    ) : (
                        <Typography>Nenhum card disponível.</Typography>
                    )}
                </div>
                {/* Snackbar para mensagens de confirmação */}
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={3000} // Tempo em milissegundos antes de desaparecer
                    onClose={handleSnackbarClose}
                >
                    <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
            </Carousel>
        </div>
    );
};

export default AppSearchCards;