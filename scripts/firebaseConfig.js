import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

export const firebaseConfig = {
  apiKey: "AIzaSyCKZeWJcoxqzA_Iot2FC8HJfHPAhJM3pIU",
  authDomain: "mood-app-a87cf.firebaseapp.com",
  projectId: "mood-app-a87cf",
  storageBucket: "mood-app-a87cf.firebasestorage.app",
  messagingSenderId: "490160797456",
  appId: "1:490160797456:web:3d686d6744a7db8d089795",
  measurementId: "G-RN3QWPNWMV"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
