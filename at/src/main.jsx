import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Heart from './heart.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <Heart />
    </React.StrictMode>
);