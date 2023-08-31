import { useState } from "react";

import DetailsDisplayer from "../components/monkeysPage/DetailsDisplayer";
import SceneDisplayer from "../components/monkeysPage/SceneDisplayer";

const useMonkeysPage = () => {
    const [stepIndex, setStepIndex] = useState(0);

    const handleTurn = () => setStepIndex((state) => state + 1);

    return {
        stepIndex,
        handleTurn,
    };
};

const MonkeysPage = () => {
    const { stepIndex, handleTurn } = useMonkeysPage();
    return (
        <main className="monkeys-page">
            <h1>Spectacle de dresseurs de singe.</h1>
            <div className="monkeys-page__content">
                <p>
                    Un spectateur rencontre deux dresseurs de singes accompagnés
                    de leur singe.
                    <br />
                    Le singe agit sur l&apos;ordre de son maître et fait soit de
                    la musique soit une acrobatie.
                    <br />
                    Le spectateur applaudit à chaque acrobatie et siffle à
                    chaque musique.
                </p>
                <div className="action-displayer">
                    <SceneDisplayer stepIndex={stepIndex} />
                    <DetailsDisplayer
                        handleTurn={handleTurn}
                        stepIndex={stepIndex}
                    />
                </div>
            </div>
        </main>
    );
};

export default MonkeysPage;
