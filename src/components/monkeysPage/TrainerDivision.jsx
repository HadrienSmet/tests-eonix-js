const TrainerDivision = ({ trainerImg, trainerRef, monkeyImg, monkeyRef }) => {
    return (
        <div className="trainer-division">
            <img src={trainerImg} alt="Image de dresseur" ref={trainerRef} />
            <img src={monkeyImg} alt="Image de singe" ref={monkeyRef} />
        </div>
    );
};
export default TrainerDivision;
