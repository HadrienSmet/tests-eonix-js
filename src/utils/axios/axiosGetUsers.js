import axios from "axios";

export const axiosGetUsers = async () => {
    return await axios.get(`http://localhost:3000/api/auth/getUsers`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
};
