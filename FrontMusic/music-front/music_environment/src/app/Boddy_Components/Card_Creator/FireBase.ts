// src/firebase.ts

//import { initializeApp } from 'firebase/app';
/*import { getFirestore, connectFirestoreEmulator, collection, addDoc, getDocs, updateDoc, doc, deleteDoc, getDoc } from 'firebase/firestore';*/
//import "firebase/auth";

// Suas configurações do Firebase (substitua com as do seu projeto)
/*const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID"
};

export const createCard = async (title: string, description: string) => {
    const docRef = await addDoc(collection(db, "cards"), {
        title,
        description
    });
    return { id: docRef.id, title, description };
};

export const fetchCards = async () => {
    const cardsCollection = collection(db, "cards");
    const cardSnapshot = await getDocs(cardsCollection);
    const cardList = cardSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return cardList;
};

export const getCardById = async (id: string) => {
    const cardDoc = await getDoc(doc(db, "cards", id));
    if (cardDoc.exists()) {
        return { id: cardDoc.id, ...cardDoc.data() };
    } else {
        throw new Error("Card não encontrado");
    }
};

export const updateCardData = async (id: string, title: string, description: string) => {
    const cardRef = doc(db, "cards", id);
    await updateDoc(cardRef, { title, description });
    return { id, title, description };
};

export const deleteCardData = async (id: string) => {
    await deleteDoc(doc(db, "cards", id));
};

// Inicializar Firebase
//const app = initializeApp(firebaseConfig);

// Inicializar Firestore
//const db = getFirestore(app);



if (window.location.hostname === "localhost") {
    connectFirestoreEmulator(db, "localhost", 8080);
  }

export { db };*/