import { useEffect } from "react";
import { useState } from "react";

import { Monkey, Spectator, Trainer } from "../../classes/monkeysPage.classes";

const firstOrdersList = [
    { order: "Marche sur les mains", type: "acrobatics" },
    { order: "Fais du monocycle", type: "acrobatics" },
    { order: "Fais un cumulet", type: "acrobatics" },
    { order: "Fais un salto", type: "acrobatics" },
    { order: "Joue avec les cymbales", type: "music" },
    { order: "Joue aves les maracas", type: "music" },
    { order: "Joue du tambour", type: "music" },
    { order: "Joue de la flûte", type: "music" },
];
const scdOrdersList = [
    { order: "Fais le moonwalk", type: "acrobatics" },
    { order: "Jongle avec des balles", type: "acrobatics" },
    { order: "Tiens en équilibre sur une balle", type: "acrobatics" },
    { order: "Fais une roue", type: "acrobatics" },
    { order: "Joue de la trompette", type: "music" },
    { order: "Joue du piano", type: "music" },
    { order: "Joue du tam-tam", type: "music" },
    { order: "Fais du beat-box", type: "music" },
];

const firstMonkey = new Monkey("Sasha", "Mojo Jojo", firstOrdersList);
const firstTrainer = new Trainer("Sasha", firstOrdersList, firstMonkey);
const scdMonkey = new Monkey("Jack", "Rafiki", scdOrdersList);
const scdTrainer = new Trainer("Jack", scdOrdersList, scdMonkey);
const spectator = new Spectator("Hadri");

const useDetailsDisplayer = (stepIndex) => {
    const [details, setDetails] = useState("");
    const [randomIndex, setRandomIndex] = useState(
        Math.floor(Math.random() * firstOrdersList.length)
    );

    useEffect(() => {}, [stepIndex]);

    useEffect(() => {
        if (stepIndex % 8 === 0)
            setRandomIndex(Math.floor(Math.random() * firstOrdersList.length));
        if (stepIndex % 8 === 3)
            setRandomIndex(Math.floor(Math.random() * scdOrdersList.length));
    }, [stepIndex]);

    useEffect(() => {
        const rightList = stepIndex % 8 < 4 ? firstOrdersList : scdOrdersList;
        const rightTrainer = stepIndex % 8 < 4 ? firstTrainer : scdTrainer;
        const rightMonkey = stepIndex % 8 < 4 ? firstMonkey : scdMonkey;

        //@Params { type: Trainer(), type: Monkey(), type: number, type: number, type: Object[] }
        //Handles the message displayed emitted from instances
        const handleDetails = (trainer, monkey, turn, randomIndex, list) => {
            if (stepIndex % 4 === 0) {
                if (stepIndex === 0) {
                    setDetails("Cliquez sur le boutton pour commencer");
                } else {
                    setDetails("Le dresseur suivant se prépare...");
                }
            } else if (turn % 4 === 1) {
                setDetails(trainer.order(randomIndex));
            } else if (turn % 4 === 2) {
                setDetails(monkey.obey(randomIndex));
            } else if (turn % 4 === 3) {
                setDetails(
                    spectator.reacts(list[randomIndex].type, monkey.name)
                );
            }
        };

        handleDetails(
            rightTrainer,
            rightMonkey,
            stepIndex,
            randomIndex,
            rightList
        );
    }, [stepIndex, randomIndex]);

    return { details };
};

const DetailsDisplayer = ({ stepIndex, handleTurn }) => {
    const { details } = useDetailsDisplayer(stepIndex);

    return (
        <div className="details-displayer">
            <p>{details}</p>
            <button onClick={handleTurn}>
                {stepIndex === 0 ? "Start" : "Next"}
            </button>
        </div>
    );
};

export default DetailsDisplayer;
