import axios from "axios";

export const axiosAddUser = async (data) => {
    return await axios.post(`http://localhost:3000/api/auth/addUser`, data, {
        headers: {
            "Content-Type": "application/json",
        },
    });
};
