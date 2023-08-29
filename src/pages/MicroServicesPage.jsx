import { useState } from "react";
import AddUserForm from "../components/microServices/AddUserForm";
import SearchDivision from "../components/microServices/SearchDivision";
import UserCard from "../components/microServices/UserCard";
import { useEffect } from "react";

const MicroServicesPage = () => {
    const [users, setUsers] = useState([]);
    const handleUsers = (users) => setUsers(users);
    useEffect(() => {
        console.log("users: ");
        console.log(users);
    }, [users]);
    return (
        <main className="micro-services-page">
            <h1>Micro-Services</h1>
            <div className="buttons-row">
                <AddUserForm handleUsers={handleUsers} />
                <SearchDivision handleUsers={handleUsers} />
            </div>
            <div className="users-displayer">
                {users.length !== 0 &&
                    users.map((user, index) => (
                        <UserCard
                            user={user}
                            handleUsers={handleUsers}
                            key={`user-${index}`}
                        />
                    ))}
            </div>
        </main>
    );
};

export default MicroServicesPage;
