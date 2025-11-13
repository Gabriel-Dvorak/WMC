import React from "react";

export default function Parent() {
    const items = [
        { id: 1, name: "Banane" },
        { id: 2, name: "Apfel" },
        { id: 3, name: "Orange" }
    ];

    function handleClick(item) {
        alert(`Button für ${item.name} wurde geklickt`);
    }

    return (
        <div>
            <h1>Demo</h1>
            <Child1List items={items} onClick={handleClick} />
        </div>
    );
}

// Props korrekt destrukturieren: ({ items, onClick })
function Child1List({ items, onClick }) {
    if (!items || items.length === 0) {
        return <p>Die Liste ist leer.</p>;
    }

    return (
        <div>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name}{" "}
                        {/* onClick aus props benutzen */}
                        <Child2Button onClick={() => onClick(item)} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Auch hier: props destrukturieren ({ onClick })
function Child2Button({ onClick }) {
    return <button onClick={onClick}>Klicke mich</button>;
}
