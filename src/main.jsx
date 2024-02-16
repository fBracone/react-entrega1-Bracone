import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCOJOgjDqOEyGdugjhXhAA9oZc7a0oiMzo",
    authDomain: "coderhouse-react-59e10.firebaseapp.com",
    projectId: "coderhouse-react-59e10",
    storageBucket: "coderhouse-react-59e10.appspot.com",
    messagingSenderId: "423995834389",
    appId: "1:423995834389:web:01d7526a78f6e4e0820e1c"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
