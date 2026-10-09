// Gruppenauswertung über Firebase Firestore.
// Es kann dasselbe Firebase-Projekt wie beim Einfluss-Test genutzt werden.
// Der Frömmigkeitskompass speichert in einer eigenen Sammlung („kompass“).
export const firebaseConfig = {
  apiKey: "AIzaSyDaUrcVeUi-kjZu9INrMyfIDdvnDj-3a6A",
  authDomain: "einfluss-test.firebaseapp.com",
  projectId: "einfluss-test",
  appId: "1:513238936201:web:286ad6eb73447b2394b458"
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
