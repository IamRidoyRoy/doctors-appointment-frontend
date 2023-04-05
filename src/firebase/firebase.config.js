// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbqJ7R6eHp4cKGYn4m3shlAKvkwKMbycA",
    authDomain: "doctors-appointment2.firebaseapp.com",
    projectId: "doctors-appointment2",
    storageBucket: "doctors-appointment2.appspot.com",
    messagingSenderId: "919683697961",
    appId: "1:919683697961:web:23ca2e2b37e8f0ebccfb38",
    measurementId: "G-DGE5658MZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;