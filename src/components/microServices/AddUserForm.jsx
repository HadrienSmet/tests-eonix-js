import { useRef } from "react";
import { axiosAddUser } from "../../utils/axios/axiosAddUser";
import { useEffect } from "react";
import { axiosGetUsers } from "../../utils/axios/axiosGetUsers";
import { useUserNames } from "../../utils/hooks/useUserNames";
import { useState } from "react";

const useAddUserForm = (handleUsers) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const firstnameLabelRef = useRef(null);
    const lastnameLabelRef = useRef(null);
    const {
        firstnameMessage,
        isFirstnameOk,
        isLastnameOk,
        lastnameMessage,
        handleFirstname,
        handleLastname,
        setIsFirstnameOk,
        setIsLastnameOk,
    } = useUserNames(firstname, lastname, setFirstname, setLastname);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFirstnameOk && isLastnameOk) {
            const newUser = {
                firstname,
                lastname,
            };
            axiosAddUser(newUser)
                .then(() => {
                    setFirstname("");
                    setIsFirstnameOk(false);
                    setIsLastnameOk(false);
                    setLastname("");
                    axiosGetUsers()
                        .then((res) => handleUsers(res.data))
                        .catch((error) => alert(error));
                })
                .catch((err) => alert(err));
        } else {
            alert(
                "Pour s'enregistrer dans la base de données il faut nécessairement introduire un nom et un prénom valide."
            );
        }
    };

    useEffect(() => {
        if (firstname !== "") firstnameLabelRef.current.classList.add("fill");
        if (firstname === "")
            firstnameLabelRef.current.classList.remove("fill");
        if (lastname !== "") lastnameLabelRef.current.classList.add("fill");
        if (lastname === "") lastnameLabelRef.current.classList.remove("fill");
    }, [firstname, lastname]);

    return {
        firstname,
        firstnameLabelRef,
        firstnameMessage,
        lastname,
        lastnameLabelRef,
        lastnameMessage,
        handleFirstname,
        handleLastname,
        handleSubmit,
        setFirstname,
        setLastname,
    };
};

const AddUserForm = ({ handleUsers }) => {
    const {
        firstname,
        firstnameLabelRef,
        firstnameMessage,
        lastname,
        lastnameLabelRef,
        lastnameMessage,
        handleFirstname,
        handleLastname,
        handleSubmit,
        setFirstname,
        setLastname,
    } = useAddUserForm(handleUsers);

    return (
        <div className="add-user-row">
            <form action="">
                <h2>Ajoute ton profil à notre base de données</h2>
                <div className="input-division">
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        onBlur={handleFirstname}
                    />
                    <label ref={firstnameLabelRef} htmlFor="firstname">
                        Prénom
                    </label>
                    {firstnameMessage !== "" && (
                        <p className="error-message">{firstnameMessage}</p>
                    )}
                </div>
                <div className="input-division">
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        onBlur={handleLastname}
                    />
                    <label ref={lastnameLabelRef} htmlFor="lastname">
                        Nom
                    </label>
                    {lastnameMessage !== "" && (
                        <p className="error-message">{lastnameMessage}</p>
                    )}
                </div>
                <button onClick={handleSubmit}>Confirmer</button>
            </form>
        </div>
    );
};

export default AddUserForm;
