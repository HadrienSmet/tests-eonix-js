import { useState } from "react";

export const useUserNames = (firstname, lastname) => {
    const [firstnameMessage, setFirstnameMessage] = useState("");
    const [isFirstnameOk, setIsFirstnameOk] = useState(false);

    const [lastnameMessage, setLastnameMessage] = useState("");
    const [isLastnameOk, setIsLastnameOk] = useState(false);

    const handleWrongFirstname = (msg) => {
        setIsFirstnameOk(false);
        setFirstnameMessage(msg);
    };
    const handleFineFirstname = () => {
        setIsFirstnameOk(true);
        setFirstnameMessage("");
    };

    const handleFineLastname = () => {
        setIsLastnameOk(true);
        setLastnameMessage("");
    };

    const handleWrongLastname = (message) => {
        setIsLastnameOk(false);
        setLastnameMessage(message);
    };

    const handleFirstname = () => {
        if (
            !firstname.match(
                /^[A-Z][a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
            )
        ) {
            handleWrongFirstname(
                "Un prénom doit être uniquement composé de lettres et doit commencer par une majuscule."
            );
        } else if (firstname.length < 3 || firstname.length > 30) {
            handleWrongFirstname(
                "Les prénoms doivent contenir entre 3 et 30 caractères"
            );
        } else {
            handleFineFirstname();
        }
    };

    const handleLastname = () => {
        if (
            !lastname.match(
                /^[A-Z][a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
            )
        ) {
            handleWrongLastname(
                "Un nom doit être uniquement composé de lettres et doit commencer par une majuscule."
            );
        } else if (lastname.length < 3 || lastname.length > 30) {
            handleWrongLastname(
                "Les noms doivent contenir entre 3 et 30 caractères"
            );
        } else {
            handleFineLastname();
        }
    };

    return {
        firstnameMessage,
        isFirstnameOk,
        isLastnameOk,
        lastnameMessage,
        handleFirstname,
        handleLastname,
        setIsFirstnameOk,
        setIsLastnameOk,
    };
};
