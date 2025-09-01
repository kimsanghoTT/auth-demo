import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";


//내꺼-본인껄로 반드시 반드시 꼭 꼭 바꾸세요
const firebaseConfig = {
    apiKey: "AIzaSyBczNLHq0L2aL5CSSnAYh-KgwxT3qLeyIE",
    authDomain: "practice-c9b9f.firebaseapp.com",
    projectId: "practice-c9b9f",
    storageBucket: "practice-c9b9f.firebasestorage.app",
    messagingSenderId: "899272455522",
    appId: "1:899272455522:web:d79eec634c7b7df5b1683b",
    measurementId: "G-F9T9EFGBKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth}