import React, { useState } from 'react';
import './heart.css'; // CSS Datei

export default function Heart() {
    const [likes, setLikes] = useState(0);
    const [animate, setAnimate] = useState(false);

    function handleClick() {
        setLikes(likes + 1);
        setAnimate(true);
        setTimeout(() => setAnimate(false), 300);
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button
                className={`heart-button ${animate ? 'animate' : ''}`}
                onClick={handleClick}
            >
                ❤️
            </button>
            <p>{likes} Likes</p>
        </div>
    );
}
