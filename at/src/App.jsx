import React, { useState } from 'react';

export default function App() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    function handleClick2() {
        setCount2(count2 + 1);
    }

    return (
        <div>
            <h1>Counters that update together</h1>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
            <br /> {/* Newline / Abstand */}

            <h1>Another Counter from REACT</h1>
            <MyFirstComponentFromReact count2={count2} onClick2={handleClick2} />
        </div>
    );
}

function MyButton({ count, onClick }) {
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}

function MyFirstComponentFromReact({ count2, onClick2 }) {
    return (
        <div>
            <MyButton2 count2={count2} onClick={onClick2} />
            <MyButton2 count2={count2} onClick={onClick2} />
        </div>
    );
}

function MyButton2({ count2, onClick }) {
    return (
        <button onClick={onClick}>
            Clicked {count2} times
        </button>
    );
}