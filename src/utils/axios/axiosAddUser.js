import axios from "axios";

export const axiosAddUser = async (data) => {
    return await axios.post(
        `${import.meta.env.VITE_API_URL}api/auth/addUser`,
        data,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
};
