import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Heart from './heart.jsx';
import Parent from './Parent.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <Heart />
        <Parent />
    </React.StrictMode>
);

// Parent mit zwei Kindern, Kind 1 Liste, Kind 2 Button, sagt Parent bescheid dort funktion mit callback.
// Product component zeigt liste an. ->