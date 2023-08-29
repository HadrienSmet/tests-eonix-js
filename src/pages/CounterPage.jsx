import { useState } from "react";

const CounterPage = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount((state) => state + 1);
    const decrement = () => {
        if (count > 0) setCount((state) => state - 1);
    };
    return (
        <main className="counter-page">
            <h1>Compteur</h1>
            <div className="counter-content">
                <h2>{count}</h2>
                <div className="buttons-row">
                    <button onClick={increment}>Incrémenter</button>
                    <button onClick={decrement}>Décrémenter</button>
                </div>
            </div>
        </main>
    );
};

export default CounterPage;
