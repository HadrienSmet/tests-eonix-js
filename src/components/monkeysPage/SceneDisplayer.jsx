import { useEffect, useRef } from "react";

import TrainerDivision from "./TrainerDivision";

import sashaImg from "../../assets/images/sasha.webp";
import trainerImg from "../../assets/images/trainer.webp";
import mojojojoImg from "../../assets/images/mojo-jojo.webp";
import rafikiImg from "../../assets/images/rafiki.webp";
import spectatorImg from "../../assets/images/spectator.webp";

const useSceneDisplayer = (stepIndex) => {
    const specDivRef = useRef(null);
    const sachaRef = useRef(null);
    const mojojojoRef = useRef(null);
    const trainerRef = useRef(null);
    const rafikiRef = useRef(null);
    const spectatorRef = useRef(null);

    const removeAnimationClass = () => {
        sachaRef.current?.classList.remove("in-action");
        mojojojoRef.current?.classList.remove("in-action");
        trainerRef.current?.classList.remove("in-action");
        rafikiRef.current?.classList.remove("in-action");
        spectatorRef.current?.classList.remove("in-action");
    };

    useEffect(() => {
        //@Params { type: Trainer(), type: Monkey(), type: number, type: number, type: Object[] }
        //Handles the animation on the img tags and the position of the spectator
        const handleInstanceAnimation = (step) => {
            removeAnimationClass();
            if (step % 4 === 1) {
                const currenttrainer = step % 8 < 4 ? sachaRef : trainerRef;
                currenttrainer.current?.classList.add("in-action");
            } else if (step % 4 === 2) {
                const currentMonkey = step % 8 < 4 ? mojojojoRef : rafikiRef;
                currentMonkey.current?.classList.add("in-action");
            } else if (step % 4 === 3) {
                spectatorRef.current?.classList.add("in-action");
            }
            if (step === 0) {
                removeAnimationClass();
            }
        };
        const handleSpectatorPosition = (step) => {
            specDivRef.current?.classList.remove("center");
            specDivRef.current?.classList.remove("right");
            if (step % 8 > 4) {
                specDivRef.current?.classList.add("right");
            }
            if (step % 4 === 0) {
                specDivRef.current?.classList.add("center");
            }
        };
        handleInstanceAnimation(stepIndex);
        handleSpectatorPosition(stepIndex);
    }, [stepIndex]);

    return {
        specDivRef,
        sachaRef,
        mojojojoRef,
        trainerRef,
        rafikiRef,
        spectatorRef,
    };
};

const SceneDisplayer = ({ stepIndex }) => {
    const {
        specDivRef,
        sachaRef,
        mojojojoRef,
        trainerRef,
        rafikiRef,
        spectatorRef,
    } = useSceneDisplayer(stepIndex);
    return (
        <div className="scene-displayer">
            <div className="trainers-div">
                <TrainerDivision
                    trainerImg={sashaImg}
                    trainerRef={sachaRef}
                    monkeyImg={mojojojoImg}
                    monkeyRef={mojojojoRef}
                />
                <TrainerDivision
                    trainerImg={trainerImg}
                    trainerRef={trainerRef}
                    monkeyImg={rafikiImg}
                    monkeyRef={rafikiRef}
                />
            </div>
            <div ref={specDivRef} className="spectator-div">
                <img
                    ref={spectatorRef}
                    src={spectatorImg}
                    alt="spectator illu"
                />
            </div>
        </div>
    );
};

export default SceneDisplayer;
