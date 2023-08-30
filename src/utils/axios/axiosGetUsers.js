import axios from "axios";

export const axiosGetUsers = async () => {
    return await axios.get(`${import.meta.env.VITE_API_URL}api/auth/getUsers`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
};
