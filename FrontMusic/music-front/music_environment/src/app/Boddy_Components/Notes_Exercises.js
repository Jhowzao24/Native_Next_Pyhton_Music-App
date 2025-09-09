import React from 'react';


function ChordSequenceGenerator({ tonality, length }) {
    const tonalities = {
        'Dó Maior': ['Dó', 'Ré', 'Mi', 'Fá', 'Sol', 'Lá', 'Si'],
        'Sol Maior': ['Sol', 'Lá', 'Si', 'Dó', 'Ré', 'Mi', 'Fá#'],
        'Ré Maior': ['Ré', 'Mi', 'Fá#', 'Sol', 'Lá', 'Si', 'Dó#'],
        'Lá Maior': ['Lá', 'Si', 'Dó#', 'Mi', 'Fá#', 'Sol#', 'Lá#']
    };
    if (!tonalities[tonality]) {
        throw new Error('Tonalidade não suportada.');
    }

    const chordSequence = [];
    const tonalChords = tonalities[tonality];
    const numChords = tonalChords.length;

    // Gera uma sequência de acordes aleatória
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * numChords);
        chordSequence.push(tonalChords[randomIndex]);
    }

    return (
        <div>
            <h2>Sequência de Acordes em {tonality}:</h2>
            <ul>
                {chordSequence.map((chord, index) => (
                    <li key={index}>{chord}</li>
                ))}
            </ul>
        </div>
    );
}

export default ChordSequenceGenerator;