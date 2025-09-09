// backend/exportData.js

const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// Inicializar Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const exportData = async () => {
  try {
    const snapshot = await db.collection('cards').get();
    const cards = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const filePath = path.join(__dirname, 'cards.json');
    fs.writeFileSync(filePath, JSON.stringify(cards, null, 2));
    console.log('Dados exportados com sucesso para cards.json');
  } catch (error) {
    console.error('Erro ao exportar dados:', error);
  }
};

exportData();