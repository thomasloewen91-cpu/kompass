// Gruppenauswertung über Firebase Firestore (Projekt „froemmigkeitskompass“).
export const firebaseConfig = {
  apiKey: "AIzaSyAOD4nNP2UwzCAsKBFQ_1Q1beAX3pipQn4",
  authDomain: "froemmigkeitskompass.firebaseapp.com",
  projectId: "froemmigkeitskompass",
  appId: "1:1079817658595:web:a998c8fa6aee1b23ea25d6"
};

const V = "10.12.2";
let cached = null;
export async function connect() {
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) return false;
  if (cached) return cached;
  const { initializeApp } = await import(`https://www.gstatic.com/firebasejs/${V}/firebase-app.js`);
  const fs = await import(`https://www.gstatic.com/firebasejs/${V}/firebase-firestore.js`);
  cached = { db: fs.getFirestore(initializeApp(firebaseConfig, "kompass")), fs };
  return cached;
}
