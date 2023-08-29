import { useState } from "react";
import { FaEdit, FaTimes, FaCheck } from "react-icons/fa";
import { axiosDeleteUser } from "../../utils/axios/axiosDeleteUser";
import { axiosGetUsers } from "../../utils/axios/axiosGetUsers";
import { useUserNames } from "../../utils/hooks/useUserNames";
import { axiosEditUser } from "../../utils/axios/axiosEditUser";

const useUserCard = (user, handleUsers) => {
    const [firstname, setFirstname] = useState(user.firstname);
    const [lastname, setLastname] = useState(user.lastname);
    const [isEditing, setIsEditing] = useState(false);
    const {
        firstnameMessage,
        isFirstnameOk,
        isLastnameOk,
        lastnameMessage,
        handleFirstname,
        handleLastname,
    } = useUserNames(firstname, lastname);

    const toggleEdit = () => setIsEditing((state) => !state);

    const handleEditUser = () => {
        if (
            isFirstnameOk ||
            (firstname === user.firstname && isLastnameOk) ||
            lastname === user.lastname
        ) {
            const updatedUser = { firstname, lastname };
            console.log(updatedUser);
            axiosEditUser(user._id, updatedUser)
                .then(() => {
                    setIsEditing(false);
                    axiosGetUsers()
                        .then((res) => handleUsers(res.data))
                        .catch((error) => alert(error));
                })
                .catch((error) => alert(error));
        } else {
            alert("Something went wrong");
        }
    };

    const handleDeleteUser = () => {
        axiosDeleteUser(user._id)
            .then(() => {
                axiosGetUsers()
                    .then((res) => handleUsers(res.data))
                    .catch((error) => alert(error));
            })
            .catch((err) => alert(err));
    };

    return {
        firstname,
        firstnameMessage,
        isEditing,
        lastname,
        lastnameMessage,
        handleDeleteUser,
        handleEditUser,
        handleFirstname,
        handleLastname,
        setFirstname,
        setLastname,
        toggleEdit,
    };
};

const UserCard = ({ user, handleUsers }) => {
    const {
        firstname,
        firstnameMessage,
        isEditing,
        lastname,
        lastnameMessage,
        handleDeleteUser,
        handleEditUser,
        handleFirstname,
        handleLastname,
        setFirstname,
        setLastname,
        toggleEdit,
    } = useUserCard(user, handleUsers);
    return (
        <div className="user-card">
            <div className="card-header">
                <FaEdit onClick={toggleEdit} />
                <FaTimes onClick={handleDeleteUser} />
            </div>
            <div className="card-content">
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            name="edit-firstname"
                            id="edit-firstname"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            onBlur={handleFirstname}
                        />
                        {firstnameMessage !== "" && (
                            <p className="error-message">{firstnameMessage}</p>
                        )}
                        <input
                            type="text"
                            name="edit-lastname"
                            id="edit-lastname"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            onBlur={handleLastname}
                        />
                        {lastnameMessage !== "" && (
                            <p className="error-message">{lastnameMessage}</p>
                        )}
                    </>
                ) : (
                    <>
                        <h3>Prénom: {user.firstname}</h3>
                        <h3>Nom: {user.lastname}</h3>
                    </>
                )}
            </div>

            {isEditing && (
                <div className="card-footer">
                    <FaCheck onClick={handleEditUser} />
                </div>
            )}
        </div>
    );
};

export default UserCard;
